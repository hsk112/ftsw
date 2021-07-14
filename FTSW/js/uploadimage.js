/**
 * 拍照
 * @param {Object} callback
 */
function plusCamera(callback) {

	if (!mui.os.plus) {
		app.toast("请初始化plus");
		return;
	}

	var filename = '';
	if (mui.os.ios) {
		filename = ""
	} else {
		filename = "_doc/camera/"
	}

	let camera = plus.camera.getCamera();
	camera.captureImage(
		function(filePath) {
			plus.io.resolveLocalFileSystemURL(
				filePath,
				function(entry) {
					callback(filePath, entry);
				},
				function(error) {
					var code = error.code; // 错误编码
					var message = error.message; // 错误描述信息
					console.log(message)
				}
			);
		},
		function(e) {}, {
			filename: filename,
			index: 1,
			system: false
		}
	);
}

/**
 * 选择相册
 */
function plusPick(callback) {
	if (!mui.os.plus) {
		app.toast("请初始化plus");
		return;
	}

	plus.gallery.pick(function(path) {
		callback(path);
	}, function(error) {
		var code = error.code; // 错误编码
		var message = error.message; // 错误描述信息
		// console.log(message)
	}, {
		filter: "image"
	})
}

function plusPick1(callback) {
	if (!mui.os.plus) {
		app.toast("请初始化plus");
		return;
	}
	var fileHeader = "file://";

	console.log('打开文件管理器')

	var CODE_REQUEST = 1000;
	var main = plus.android.runtimeMainActivity();
	if (plus.os.name == 'Android') {
		// console.log(111111)
		var Intent = plus.android.importClass('android.content.Intent');
		var intent = new Intent(Intent.ACTION_GET_CONTENT);
		intent.addCategory(Intent.CATEGORY_OPENABLE);
		intent.setType("*/*");
		main.onActivityResult = function(requestCode, resultCode, data) {
			if (requestCode == CODE_REQUEST) {
				// console.log(2222)
				// console.log(requestCode)
				var uri = data.getData();
				plus.android.importClass(uri);
				var Build = plus.android.importClass('android.os.Build');
				var isKitKat = Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT;

				var DocumentsContract = plus.android.importClass('android.provider.DocumentsContract');
				// DocumentProvider
				if (isKitKat && DocumentsContract.isDocumentUri(main, uri)) {
					console.log("版本大于 4.4 ");
					console.log(333)
					// ExternalStorageProvider
					if ("com.android.externalstorage.documents" == uri.getAuthority()) {
						console.log(444)
						var docId = DocumentsContract.getDocumentId(uri);
						var split = docId.split(":");
						var type = split[0];

						if ("primary" == type) {
							console.log(5555)
							var Environment = plus.android.importClass('android.os.Environment');
							callback(fileHeader + Environment.getExternalStorageDirectory() + "/" + split[1]);
						} else {
							console.log(6666)
							var System = plus.android.importClass('java.lang.System');
							var sdPath = System.getenv("SECONDARY_STORAGE");
							if (sdPath) {
								console.log(7777)
								callback(fileHeader + sdPath + "/" + split[1]);
							}
						}
					}
					// DownloadsProvider
					else if ("com.android.providers.downloads.documents" == uri.getAuthority()) {
						console.log(8888)
						var id = DocumentsContract.getDocumentId(uri);
						var ContentUris = plus.android.importClass('android.content.ContentUris');
						var contentUri = ContentUris.withAppendedId(
							//    Uri.parse("content://downloads/public_downloads"), Long.valueOf(id));
							Uri.parse("content://downloads/public_downloads"), id);
						callback(fileHeader + getDataColumn(main, contentUri, null, null));
					}
					// MediaProvider
					else if ("com.android.providers.media.documents" == uri.getAuthority()) {
						console.log(999)
						var docId = DocumentsContract.getDocumentId(uri);
						var split = docId.split(":");
						var type = split[0];
						console.log(type)
						var MediaStore = plus.android.importClass('android.provider.MediaStore');
						if ("image" == type) {
							contentUri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
						} else if ("video" == type) {
							contentUri = MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
						} else if ("audio" == type) {
							contentUri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
						}else {
							contentUri =  MediaStore.Files.getContentUri("external");
						}
						var selection = "_id=?";
						var selectionArgs = new Array();
						selectionArgs[0] = split[1];
						callback(fileHeader + getDataColumn(main, contentUri, selection, selectionArgs));
					}
				}
				// MediaStore (and general)
				else if ("content" == uri.getScheme()) {
					console.log('aaaa')
					callback(fileHeader + getDataColumn(main, uri, null, null));
				}
				// File
				else if ("file" == uri.getScheme()) {
					console.log('bbb')
					callback(fileHeader + uri.getPath());
				}
				console.log("wcnmlgb")
			}
		}
		main.startActivityForResult(intent, CODE_REQUEST);
	}
	// }
}

function getDataColumn(main, uri, selection, selectionArgs) {
	console.log(main);
	console.log(uri);
	console.log(selection);
	console.log(selectionArgs);
	console.log('cccc')
	
	plus.android.importClass(main.getContentResolver());
	// console.log('ddd')
	var MediaStore = plus.android.importClass("android.provider.MediaStore");
	try {
		console.log(main.getContentResolver().query(uri, ['_data'], selection, selectionArgs, null))
		let cursor = main.getContentResolver().query(uri, ['_data'], selection, selectionArgs, null);
		plus.android.importClass(cursor);
		
		if (cursor != null && cursor.moveToFirst()) {	
			console.log(cursor.getColumnIndex('_data'))			
			var column_index = cursor.getColumnIndex('_data');					
			console.log(cursor.getString(column_index))
			var result = cursor.getString(column_index)
			cursor.close();
			console.log("----" + JSON.stringify(result));
			return result;
		}
	} catch (e) {
		// app.toast("请选择您手机上的文件！");		
		
	}
	return null;
}
//上传
function plusUploadFile(fileUrl, callback) {
	// console.log(JSON.stringify(fileUrl))
	var toast = plus.nativeUI.showWaiting("处理中");
	var task = plus.uploader.createUpload(config.urls.baseUrl + config.actions.upImage, {
		method: "post",
		chunkSize: 1024 //分块
	}, function(result, status) {
		// 上传完成
		if (status == 200) {
			console.log("上传成功")
		} else {
			// console.log(JSON.stringify(result))
			app.toast("上传失败")
		}
		// console.log("status:" + status);
		app.hideLoader();
		callback(JSON.parse(result.responseText));
	});
	task.setRequestHeader("X-Access-Token", app.sessionId());
	task.addFile(fileUrl, {
		key: "file"
	});

	task.addEventListener("statechanged", function(upload, status) {
		if (upload.totalSize > 0) {
			var a = upload.uploadedSize / upload.totalSize * 100;
			toast.setTitle("进度" + parseInt(a) + "%");
		}
	}, false);
	task.start();
}

/**
 * 通用选择上传文件
 */
function plusSelectFile(fileSuffix,callback) {
	console.log(fileSuffix)
	/*打开文件*/
	plusPick1(function(path) {
		console.log("path"+path);
		console.log(path.lastIndexOf("."))
		let fileType = path.substring(path.lastIndexOf(".")+1,path.length)
		console.log(fileType)
		if(!path.endsWith("null")){
			if(fileSuffix.lastIndexOf(fileType) !=-1){
				plusUploadFile(path, function(data) {
					callback(data, path);
				});				
			}else {
				var data={success:false,message:"请选择"+fileSuffix+"格式的文件！"};
				callback(data, path);
			}

		}else{
			var data={success:false,message:"文件位置不合法，请重新选择！"};
			callback(data, path);
		}		
	});
}

/**
 * 通用选择图片
 */
function plusSelectImage(callback) {
	var buttonTit = [{
		title: "拍照"
	}, {
		title: "相册"
	}];
	plus.nativeUI.actionSheet({
		title: "请选择",
		cancel: "取消",
		buttons: buttonTit
	}, function(b, id) { /*actionSheet 按钮点击事件*/
		console.log('index', b.index)
		switch (b.index) {
			case 0:
				break;
			case 1:
				/*拍照*/
				plusCamera(function(filePath, entry) {
					//获取图片路径
					var img_path = entry.toLocalURL();
					console.log('图片路径'+img_path);
					plusUploadFile(img_path, function(data) {
						callback(data, img_path);
					});
				});
				break;
			case 2:
				/*打开相册*/
				plusPick(function(path) {
					console.log(path);
					plusUploadFile(path, function(data) {
						callback(data, path);
					});
				});
				break;
			default:
				break;
		}
	})
}

//图片压缩
function dealImage(base64, w, callback) {
	var newImage = new Image();
	var quality = 1; //压缩系数0-1之间
	newImage.src = base64;
	newImage.setAttribute("crossOrigin", 'Anonymous'); //url为外域时需要
	var imgWidth, imgHeight;
	newImage.onload = function() {
		imgWidth = this.width;
		imgHeight = this.height;
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		if (Math.max(imgWidth, imgHeight) > w) {
			if (imgWidth > imgHeight) {
				canvas.width = w;
				canvas.height = w * imgHeight / imgWidth;
			} else {
				canvas.height = w;
				canvas.width = w * imgWidth / imgHeight;
			}
		} else {
			canvas.width = imgWidth;
			canvas.height = imgHeight;
			quality = 1;
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
		var base64 = canvas.toDataURL("image/jpeg", quality); //压缩语句
		callback(base64); //必须通过回调函数返回，否则无法及时拿到该值
	}
}

//图像识别
var bizLicenseOCR = function(base64, callback) {
	var url = config.urls.baseUrl + config.actions.bizLicenseOCR;
	var params = {};
	params.imageBase64 = base64;

	app.showLoader();
	$.ajax(url, {
		data: params,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
			} else {
				callback(data);
				// app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}


//通用图像识别
var generalBasicOCR = function(base64, callback) {
	var url = config.urls.baseUrl + config.actions.generalBasicOCR;
	var params = {};
	params.imageBase64 = base64;

	// console.log(JSON.stringify(params))
	app.showLoader();
	$.ajax(url, {
		data: params,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			// console.log(JSON.stringify(data))
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
			} else {
				callback(data);
				// app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}
