#!/bin/bash
wget -O front.html http://nasional.kompas.com/
#grep -Poi 'latest__title.*?\K.*?(?=latest__group)' front.html > s1.txt
#grep -Poi 'kompas.com\\/read.*\">\K.*?(?=<)' s1.txt > text.txt
#sed -i 's/\\"//g' text.txt 
#sed -i 's/$/./g' text.txt

grep -Poi "_parent.>\K.*(?=</a)" front.html > text.txt

#Adjusted to suit Kompas' new format (15 Apr 2017)
grep -Poi "h1.*big__title.*\>\K.*(?=\<)" front.html > text.txt
grep -Poi "kompas\.com\/read.*?>\K.*(?=\<\/a)" front.html > text.txt
sed -i '/^<img.*$/d' text.txt

#Adding newsjs.com content
wget www.newsjs.com/id/ -O front_newsjs.html
grep -Poi "(\<a href.*newsjs.com\/id\/.*bookmark\"\>\K.*(?=\<\/a\>)|\<p\>\K.*(?=\<\/p\>))" front_newsjs.html >> text.txt

sed -i 's/$/<Break time="1000ms"\/>/g' text.txt #comment out this line if you dont want ssml break tag

espeak -m -f text.txt -s 350 -v id
