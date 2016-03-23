#!/bin/bash
wget -O front.html www.kompas.com
grep -Poi 'latest__title.*?\K.*?(?=latest__group)' front.html > s1.txt
grep -Poi 'kompas.com\\/read.*\">\K.*?(?=<)' s1.txt > text.txt
sed -i 's/\\"//g' text.txt 
sed -i 's/$/./g' text.txt
