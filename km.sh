#!/bin/bash
wget -O front.html www.kompas.com
sed -i 's/var more.*$//g' front.html
grep -Poi 'read.*\>\K.*(?=<\/a)' front.html > text.txt
sed -i 's/$/./g' text.txt
espeak -vid -s350 -f text.txt
