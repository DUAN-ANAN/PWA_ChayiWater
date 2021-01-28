/*=============================================================================
 
 =============================================================================*/
var debug = true;
var dbDir = "ChiayiDB";
var localFileSystem;
var separator = "/";
var db;
var allDBs = ["db.sqlite"];
var remoteIP = "203.66.65.120";
var remoteURI = "http://" + remoteIP + "/ChiayiSecretaryMobileService/";
var remoteDBURI = remoteURI+"db/";
var dbModifiedTime = "1560755549000";

function db_check() {
    ///<summary>創建DB</summary>
    if (!db) {
        db = window.SpatialitePlugin.openDatabase("/" + dbDir + "/"+allDBs[0], "1.0", "", -1);
        if (db)
            console.log("connection sqlite successfully!");
        else
            console.log("connection sqlite failed!");
    }
}
