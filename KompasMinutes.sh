#!/bin/bash
wget kompas.com -O kompas.txt
less kompas.txt | grep -B5 "menit lalu" >> pas.txt
sed -i -n '1,21p' pas.txt
espeak -vid -f pas.txt -m -s250
rm kompas.txt
rm pas.txt
