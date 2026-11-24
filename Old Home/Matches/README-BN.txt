CGC MATCH CENTRE — ফাইনাল ফোল্ডার স্ট্রাকচার
===============================================

Matches/
  index.html       — হোমপেজ; এখানে সর্বশেষ Season Three দেখাবে
  styles.css       — হোমপেজের ডিজাইন
  home.js          — Season Three-এর সর্বশেষ ম্যাচ/কাউন্ট দেখায়
  images/          — ম্যাচের ছবি রাখার ফোল্ডার
  Season-1/
    index.html
    styles.css
    script.js      — Season One-এর আগের ১৮টি ম্যাচ
  Season-2/
    index.html
    styles.css
    script.js      — Season Two-এর আগের ৪৮টি ম্যাচ
  Season-3/
    index.html
    styles.css
    script.js      — ম্যানুয়ালি নতুন ম্যাচ যোগ করার কোড

SEASON THREE-তে নতুন ম্যাচ যোগ করার নিয়ম
---------------------------------------
১. Season-3/script.js ফাইলটি খুলবে।
২. const matches = [ অংশটি খুঁজে বের করবে।
৩. ফাইলের ভেতরে দেওয়া Example match object কপি করবে।
৪. Comment-এর বাইরে matches array-এর ভেতরে object-টি পেস্ট করবে।
৫. number, date, opponent, result ও score নিজের ম্যাচ অনুযায়ী লিখবে।
৬. Goals, Assists, MOTM, Description এবং Image ঐচ্ছিক।
৭. ফাইল Save করে Hosting-এ শুধু Season-3/script.js আপলোড/Replace করলেই হবে।

তারিখের ফরম্যাট: DD-MM-YYYY (যেমন 24-11-2026)
Result লিখবে: won অথবা draw অথবা lost

ম্যাচের ছবি যোগ করতে:
- ছবিটি Matches/images/ ফোল্ডারে আপলোড করবে।
- script.js-এ image: "images/season3-match-01.jpg" লিখবে।

গুরুত্বপূর্ণ:
- Season One ও Season Two-এর ৬৬টি ম্যাচের রেকর্ড মূল ZIP-এর কোডের
  সঙ্গে মিলিয়ে হুবহু রাখা হয়েছে; কোনো ম্যাচের ডেটা পরিবর্তন করা হয়নি।
- Add Match, Edit, Delete, Import/Export বা Browser Local Storage নেই।
- তিনটি সিজনের আলাদা HTML, CSS ও JavaScript ফাইল আছে।
- Folder name ও structure ঠিক রেখে পুরো Matches ফোল্ডার আপলোড করবে।
- নতুন ম্যাচের number আগের সর্বোচ্চ নম্বরের পরের নম্বর দেবে। পেজে বড়
  ম্যাচ নম্বর আগে দেখাবে।
