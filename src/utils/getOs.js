// return Operation System using window object
export function getOS() {
  const userAgent = window.navigator.userAgent
  let OSName = "Unknown";
  if (userAgent.indexOf("Windows NT 10.0") !== -1)
    OSName = "Windows 10";
  if (userAgent.indexOf("Windows NT 6.3") !== -1)
    OSName = "Windows 8.1";
  if (userAgent.indexOf("Windows NT 6.2") !== -1)
    OSName = "Windows 8";
  if (userAgent.indexOf("Windows NT 6.1") !== -1)
    OSName = "Windows 7";
  if (userAgent.indexOf("Windows NT 6.0") !== -1)
    OSName = "Windows Vista";
  if (userAgent.indexOf("Windows NT 5.1") !== -1)
    OSName = "Windows XP";
  if (userAgent.indexOf("Windows NT 5.0") !== -1)
    OSName = "Windows 2000";
  if (userAgent.indexOf("Mac") !== -1) OSName = "Mac/iOS";
  if (userAgent.indexOf("X11") !== -1) OSName = "UNIX";
  if (userAgent.indexOf("Linux") !== -1) OSName = "Linux";

  return OSName
}