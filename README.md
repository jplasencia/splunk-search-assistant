# Splunk Search Helper Chrome Extension
This is a Chrome extension to enable a few handy features in the Splunk SPL search box.

It enables the following features.
- Ctrl+/ or Cmd+/: Toggle code comments
- Ctrl+' or Cmd+': Collapse/fold code comment.
- Ctrl+x or Cmd+x: Cut lines
- Ctrl+l or Cmd+l: Toggle showing line numbers
- Ctrl+Space or Cmd+Space: Show command help. Place your cursor on a word (e.g if, case, stats, timechart) and see a pop-up window with some basic command information. In some cases, it also includes a link to the splunk documentation page for that command.

Check out this [short video](https://www.youtube.com/watch?v=BonozTPQdJE) demo.

## Getting Started
This extension is also available in the Chrome web store. [Click here to go there](https://chromewebstore.google.com/detail/splunk-search-assistant/gnlglamkifcfbgblafmnnngelhgfpoll)

1. Clone or download this repository
2. Follow the instructions on [this page](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#:~:text=To%20load%20an%20unpacked%20extension,the%20bottom%20of%20the%20menu.) on how to install unpacked extensions.


## If you are not using Splunk Cloud
This extension is configured to work with Splunk Cloud. If you are not using Splunk Cloud, you will need to edit the manifest.json file prior to installing the extension. In the manifest file, replace "https://\*.splunkcloud.com/\*" with the URL of your Splunk site. There are two places you need to update. One is host_permissions and matches under content_scripts. See below:
- ![Set](https://iili.io/JMDUwg4.png )


## Settings
You can toggle the available options on and off. Note that you will need to refresh your page after making changes.

- ![Settings](https://iili.io/Hl2lZen.jpg )

## How does it work?
Splunk uses a very popular web code editor called [Ace Editor](https://ace.c9.io/). This extension works by adding some functionality using the existing ace library available methods.


This extension DOES NOT make any external calls or transmit data to third party servers. If you are familiar with javascript, you can clearly see this in the source code.

