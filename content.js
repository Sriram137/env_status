hostname = window.location.hostname;
if (hostname.indexOf(".rippling.") !== -1) {
    sps = window.location.hostname.split(".");
    env_name = sps[0];
    document.title = "[" + env_name + "]" + document.title;
}

if (hostname.indexOf("localhost") !== -1){
    document.title = "[local]" + document.title;
}
