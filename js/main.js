function PhoneOrDesktop() {
    try {

        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            window.location.href = "./blog/blogPhone.html";
        } else {
            window.location.href = "./blog/blogCom.html";

        }
    } catch (e) {
        alert("error");
    }
}