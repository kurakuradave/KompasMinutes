# KompasMinutes
A talking news web-bot powered by Node.JS and eSpeak for keeping up-to-date with Indonesian news.

Every minute, this web-bot will fetch the main page of www.kompas.com, zeroes in on the titles of the top-three most recent news, and toss them over to eSpeak, which will speak them out-loud. Simply run it, listen to it, and continue to do other things - stay in-the-know of recent happennings in Indonesia, all without laying sight on the newsportal's website :)

NOTE:
This assumes:
1. That you are using a Linux-based OS, any distro works just fine ( Debian, Ubuntu, Fedora, OpenSUSE etc )
2. That you have eSpeak installed. Most Linux distros comes with eSpeak already pre-installed, but if not, do "sudo apt-get install espeak" (for Debian-family distros) or "sudo yum install espeak" (Fedora-based). 
3. That your eSpeak is updated with the latest pronounciation rules and dictionaries for Bahasa Indonesia, obtainable from my other repo www.github.com/kurakuradave/espeak_id/ 
4. That you have Node.JS installed. You can download installation binaries from https://nodejs.org/dist any version above 0.10.24 should work just fine.


To Run, navigate to the directory KompasMinutes/ and execute "node KompasMinutes.js"


Have fun! :)
