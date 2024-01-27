import React from 'react'
import './Try.css'


export default function Calneder1() {
  const customDays = [
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },

    { day: '১', content: '15 april', color: 'white' },
    { day: '২', content: 'april 16', color: 'red' },
    { day: '৩', content: 'april 17', color: 'white' },

    { day: '৪', content: 'april 18', color: 'white' },
    { day: '৫', content: 'april 19', color: 'white' },
    { day: '৬', content: 'april 20', color: 'white' },
    { day: '৭', content: 'april 21', color: 'white' },
    { day: '৮', content: 'april 22', color: 'white' },
    { day: '৯', content: 'april 23', color: 'red' },
    { day: '১০', content: 'april 24', color: 'white' },
    { day: '১১', content: 'april 25', color: 'white' },
    { day: '১২', content: 'april 26', color: 'white' },
    { day: '১৩', content: 'april 27', color: 'white' },
    { day: '১৪', content: 'april 28', color: 'white' },
    { day: '১৫', content: 'april 29', color: 'white' },
    { day: '১৬', content: 'april 30', color: 'red' },
    { day: '১৭', content: 'may 1 ', color: 'white' },
    { day: '১৮', content: 'may 2', color: 'white' },
    { day: '১৯', content: 'may 3', color: 'white' },
    { day: '২০', content: 'may 4', color: 'white' },
    { day: '২১', content: 'may 5', color: 'white' },
    { day: '২২', content: 'may 6', color: 'white' },
    { day: '২৩', content: 'may 7', color: 'red' },
    { day: '২৪', content: 'may 8', color: 'white' },
    { day: '২৫', content: 'may 9', color: 'white' },
    { day: '২৬', content: 'may 10', color: 'white' },
    { day: '২৭', content: 'may 11', color: 'white' },
    { day: '২৮', content: 'may 12', color: 'white' },
    { day: '২৯', content: 'may 13', color: 'white' },
    { day: '৩০', content: 'may 14', color: 'red' },
    { day: '৩১', content: 'may 15', color: 'white' },


    // ... Add more days as needed
  ];
  return (
    <>
      <div>
     

      <div className="month"
    style={{
    backgroundImage: `url(${require('./Asset/bohagg.jpg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}
>
       <ul>
        
         <li >
           বহাগ (April-May)<br />
           <span style={{ fontSize: '18px' }}>2023-24</span>
         </li>
       </ul>
     </div>

     <ul className="weekdays">
       <li>দেওবাৰ</li>
       <li>সোমবাৰ</li>
       <li>মঙলবাৰ</li>
       <li>বুধবাৰ</li>
       <li>বৃহস্পতিবাৰ</li>
       <li>শুকুৰবাৰ</li>
       <li>শনিবাৰ</li>

     
     </ul>

     <ul className="days">
       {customDays.map(({ day, content, color }) => (
         <li key={day} style={{ backgroundColor: color }}>
           {day}
           <div>{content}</div>
         </li>
       ))}
     </ul>
   </div>

  

   
    <div className='content'>
      <ul>
        <li>১বহাগ-নতুন বছৰ আৰম্ভ। ধ্বজাৰোপন। নতুন হালখাতা। বগৰীবাৰী মহামায়া থানত পূজা মহোৎসব। শানপাৰা দেৱালয়ত বসন্ত উৎসব। ভাইভনী পাহাৰৰ বুঢ়াবুঢ়ী থানত মহামেলা। জলাখাটা গাৱঁৰ সিন্ধি দৌলৰ মেলা। পাণ্ডুলা গাৱঁৰ দামোদৰ ধামত মেলা। আলোকঝাৰি পাহাৰত মহামায়া পূজা। শলগুৰী মহাদেব পাহাৰত সাতবিহু উৎসৱ আৰম্ভ। লক্ষীমপুৰৰ বুটীনগৰ পুখুৰীৰ দৌল উৎসৱ। চতিয়াৰ মাধুৰী আহতৰ তলত সাতদিনীয়া মুকলি বিহু। খগৰপুৰৰ আদ্যশক্তি দেবালয়ত ৩দিনীয়া পূজা উৎসব। নগাঁও নৰোৱা বালিসত্ৰত দামোদৰ আতাৰ থানৰ পৰা ভাগবত ভ্রমণ। বড়ো সকলৰ খেড়াই উৎসস্ত্র। বেলগুৰি সত্ৰত বার্ষিক নামকীর্ত্তন। বহাগ বিহু। মানুহ বিহু। পহিলা বহাগ।</li>

        <li>২-গোসাঁই বিহু। কাহাৰপাৰা বেছেৰীয়া কীৰ্ত্তন ঘৰত অখণ্ড গীতা পাঠ। নগাঁও নৰোৱা বালিসত্ৰত দামোদৰ আতাৰ থানত নামকীর্ত্তন। বিশ্বনাথ শিবমন্দিৰত উৎসব আৰু মেলা। দক্ষিণ কামৰূপৰ পলাশবাৰীৰ উপৰহালীত দধিমন্থন বার্ষিক সুৱৰী উৎসৱ।ই</li>
        <li>৩-তাতৰ বিহু। দৰং জিলাৰ ওৰাং মৌজাৰ গোলাবিল সত্রত দুদিনীয়া বার্ষিক ভাওনা আৰু সভা। দক্ষিণ কামৰূপৰ ৰামপুৰত দধিমন্থন উৎসৱ, দক্ষিণ কামৰূপৰ গুইমাৰা গাৱঁৰ বংশীগোপাল সত্ৰত (পুৰণা) -৫।৫২ বার্ষিক গোষ্ঠলীলী আৰু সুৱঁৰী উৎসৱ।</li>
        <li> ৪ ৰঙিয়াত তিনিদিনীয়া ধন্বন্তৰী পূজা। নাঙলৰ বিহু। হ। কাকৈজানা ঠাকুৰাণী পাহাৰত বুঢ়ী আইৰ পূজা। দিহিনা দামোদৰ সত্ৰত তিনদিনীয়া ৰজাদৌল উৎসব। দৰংজিলা দেওমৰনৈ বৰিগাঁওৰ ১০৩ ঐতিয্যমণ্ডিত মাটিয়াবুঢ়া গোসাইঘৰত দৌল উৎসৱ।</li>
        <li>৫-দহকনীয়াত মহামায়া পূজা। উত্তৰ মাজগাঁর বামুণি পাহাৰত ছয়তিথি উৎসৱ পালন। সৰু তেজপুৰত দধিমন্থন উৎসব। দেউৰী বিহু। লাই-লাটুব-কেদাৰ। </li>
        <li>৬-পূর্ণগ্রাস সূৰ্য্যগ্রহণ, ভাৰতত অদৃশ্য। গ্রহণ আৰম্ভ দিঘ ৭।৫ গ্রহণ মধ্য আৰম্ভ দিঘ ৮।৭ গ্রহণ মধ্য দিঘ ৯।৪৭ গ্রহণ মধ্য শেষ দিঘ ১১।২৭ গ্রহণ শেষ দিঘ ১২।২৯ গ্রহণ ব্যাসার্দ্ধ ১.০১৩, গ্রহণ স্থিতি সময়-৫ ঘঃ ২৪ মিঃ। বৰম্বৈ সিদ্ধাশ্রমত সমাজ সংস্কাৰ যজ্ঞ। দিহিনা দামোদৰ সত্ৰ, হাজো দামোদৰ দেৱ টোলাৰ দামোদৰ দেৱ মন্দিৰত, খটিয়ামাৰী সত্ৰ, খিদিৰপুখুৰী ১৭ সত্র, বাইহাটা শিৱমন্দিৰ পাণীতোলা, বজালীৰ ৰতনপুৰ গাঁও, মৌৰাসত্ৰ, বৰদোৱা লংকা বাসুদেব থান, ক্ষুদ্র ডিমুৰ দামোদৰদেৱ সত্ৰ, দক্ষিণপাট সত্ৰত আদি ঠাইত মহাপুৰুষ শ্রীশ্রীদামোদৰ দেৱৰ তিৰোভাব তিথি পালন, শুকদ'ল --৫।৫২ বৰবৰী শলগুৰী সত্ৰৰ তৰবৰি বৰাৰ তিঃতিঃ। চেৰা বিহু। বঙ্গাইগাওঁৰ আটগাৱঁতও দিনীয়াকৈ শ্রীশ্রীৰাজাঠাকুৰ পূজা আৰু মেলা, হাউলীৰ মদনমোহন কীৰ্ত্তন ঘৰত নামকীৰ্ত্তন পাঠ। ৰামদিয়াৰ ভঠেলী উৎসৱ। সুন্দদিয়া ধামত -২০ সুৱেৰী উৎসব। বুঢ়াদেউ পাহাৰত সাতবিহু উৎসব। ৰণাকুছি কৈলাশৰ ভঠেলী। যেহেলীপাৰাৰ সভা। আলোকঝাৰি থানত মহামেলা। অভয়াপুৰীৰ ধৰ্মপুৰ সত্ৰত বাহিনাম মহোৎসৱ। ভৈৰব পাহাৰৰ ভৈৰব থানত মেলা। শলমাৰী মহাদেৱ পাহাৰত সাতবিহু উৎসব। শৰণীয়া কছাৰী জনগোষ্ঠীৰ বাঁহাঁসাই উৎসৱ</li>
        <li>
        ৭-খামাৰপাৰ গাৱঁত শ্রীশ্রীলক্ষ্মী নাৰায়ণ মন্দিৰৰ প্ৰতিষ্ঠা দিৱস। বৰপেটাত নামকীৰ্ত্তন। বৰখালাত বুঢ়া গোসাইৰ ভঠেলী উৎসব। জালিখাটাত পাৰসূৱৰী উৎসৱ। চুতীয়াৰাণী সতী সাধনী দিৱস। ওদলা গাওৰ মুক্তেশ্বৰী দেৱালয়ত বাহভঙ্গা দৌল উৎসৱ। ১ নং জীয়াকুৰ দধিমথুন সুৱৰী উৎসৱ। জমাৎ-উল-বিদা। ২১ বুদ্ধপূর্ণিমা। বুদ্ধাব্দ ২৫৫৭ আৰম্ভ। বৰপেটাৰ গলিয়াহাটীত পালনাম। দুধকুৱৰী পীঠত বার্ষিক হোমযজ্ঞ উদযাকন। ভবানীপুৰ নহাটিত পালনাম। মৌৰাসত্ৰত বার্ষিক পালনাম। দোং শিলসাকো গাৱঁত বৰসবাহ ভাওনা উদযাপন। দুধকুৱৰী
        </li>
        <li>
        ৮-পলাশবাৰীত সুৱেৰী উৎসৱ। হালধাৰ সভা। বৰটাৰী সাগৰ মন্থনত সুৱৰী উৎসব। বৰমপুৰ পচকীয়া থানত মাঙ্গলিক অনুষ্ঠান। পাটবাউসী শঙ্কৰদেব থানত শঙ্কৰ কলা স্মৃতি সংৰক্ষিণী সভা। যোৰহাট গীতার্থী সমাজৰ প্ৰতিষ্ঠা দিৱস। ইদ-উল-ফিটৰ।
        </li>
        <li></li>
        <li>৯-অক্ষয় তৃতীয়া। ব্ৰত। যোৰহাট বন্তিদ্ধলা বৈকুন্ঠত কীর্ত্তন মহোৎসৱ। কটবা সত্ৰত ভঠেলী আৰম্ভ। শিঙিমাৰীৰ অমৃতপ্রকাশ যোগাশ্রমত মহোৎসৱ। ৰাধিকা শান্তিৰ স্মৃতি দিৱস।</li>
        <li>১১-ভবানীপুৰ কালজাৰ সত্ৰ আদি ঠাইত গোপাল আতাৰ তিঃতিঃ। জগতগুক শঙ্কৰাচাৰ্য্যৰ ২১ জন্মতিথি। তামুলপুৰৰ মহাপ্ৰভুৰ শ্ৰীশ্ৰীকৃষ্ণ মন্দিৰৰ বাৰ্ষিক ধৰ্ম্মীয় মহোৎসৱ। বৰমাৰ খাৰুৱা গাঁও আৰু নলবাৰী কৰিয়া লঙটাবাবা নামঘৰ বিজুলীঘাটত দুদিনীয়া ভঠেলী উৎসৱ। পলাশবাৰী কুকুৰীয়াত (হুদুমপুৰ) পুখুৰীপাৰ সত্ৰৰ ৰামচন্দ্ৰ প্ৰভুৰ সুৱৰী উৎসৱ। দৰঙৰ ঐতিহাসিক বুঢ়ীনগৰ পুখুৰীৰ দৌল উৎসৱ।</li>
        <li>১২-ঘোঁৰামাৰাৰ দৌল উৎসৱ। মঙ্গৰা মাজপাৰ গাৱঁত সুৱেৰী উৎসৱ।</li>
        <li>১৩-দেৱানগাওঁ গোৱালপাৰাত শ্ৰীশ্ৰী মহাৰাণী পূজা উৎসব। মির্জাৰ বিৰাট সুৱৰী উৎসব। </li>
        <li>১৪-মায়ামৰা বিষ্ণুবালিকুছি আৰু নাহৰখাট সত্ৰত শ্রীঅনিৰূদ্ধ দেৱৰ জন্ম দিবস। গোৱালপাৰা ১৯ গাওঁৰ বেনু দেৱীৰ তিঃতিঃ। ওদলা গাওৰ মুক্তেশ্বৰী দেৱালয়ত তিনিদিনীয়া দৌল উৎসৱ। </li>
        <li>১৫- -শ্রীশ্রীসীতা নবমী ব্রত। বৰনদ্দীৰ ভঠেলী উৎসৱ। বৰবালিসিঠা গাঁৱত তিনিদিনীয়া ভেকুলী কন্দা দেউল উৎসৱ। ভাষাবিদ ৬০ ভগবান মৰলৰ স্মৃতি দিৱস। </li>
        <li>১৬-মানিকপুৰ সত্ৰত শ্রীশ্রী গোবিন্দ ভবন গীতাশ্রম প্রতিষ্ঠা দিবস।১৭-মে' দিবস (শ্রমিক ৫৩ দিবস)।</li>
        <li>১৮-দৰংগিৰি দিননাথ শান্তি আশ্ৰমৰ প্রতিষ্ঠাতা শ্রীমৎ প্রেমানন্দ ব্রহ্মচাৰীৰ তিঃতিঃ।</li>
        <li>  ১৯-বালিকুছিৰ সুভা। </li>
        <li>২০- নলবাৰী নপ্তিপাৰাৰ সমাজ সেবক যতীন্দ্ৰ নাথ গোস্বামীৰ তিঃতিঃ। বেলশৰ (বিশ্বেশ্বৰ) ত বিখ্যাত ভঠেলী উৎসব। আউলা চৌকাৰ বুঢ়ী গোসানী থানত দৌল উৎসৱ।</li>
        <li>২১ বুদ্ধপূর্ণিমা। বুদ্ধাব্দ ২৫৫৭ আৰম্ভ। বৰপেটাৰ গলিয়াহাটীত পালনাম। দুধকুৱৰী পীঠত বার্ষিক হোমযজ্ঞ উদযাকন। ভবানীপুৰ নহাটিত পালনাম। মৌৰাসত্ৰত বার্ষিক পালনাম। কালঝাৰ সত্ৰত জগন্নাথৰ নামকীৰ্ত্তন। নামদাং শিলসাকো গাৱঁত বৰসবাহ ভাওনা উদযাপন। দুধকুৱৰী পীঠত বার্ষিক হোমযজ্ঞ উদযাকন। ৰঙিয়াৰ সীতাৰা সত্ৰৰ সত্ৰাধিকাৰ কমলাকান্ত মহন্তৰ তিঃতিঃ। পাটাছাৰকুছি পাটাসত্ৰত বাসুদেব মন্দিৰত ভোগ নিবেদন। ক্ষেত্ৰাপাৰা ভাগবত সেবাশ্রমত মহোৎসর।২৪-অসম বৈষ্ণৱ সম্মীলনীৰ প্রতিষ্ঠাতা আচাৰ্য্য নিমাৰাম সেৱাতীৰ্থ গোস্বামীৰ আবিৰ্ভাৱ তিথি। </li>
        <li> ২২-মঙ্গলদৈ বামুন পাৰা শিব মন্দিৰত দৌল উৎসৱ।</li>
        <li>২৫- বিশ্ব কবি ৰবীন্দ্ৰ নাথ ঠাকুৰৰ জন্মোৎসৱ। চট্টগ্রাম দেবালয়ত দুদিনীয়া মহাযজ্ঞ। বিশ্ব বেড ক্ৰছ দিবস। </li>
        <li>২৬-গড়ল গাৱঁৰ ভট্টাপাৰাত ৰাণীচাপৰি মা মনসা মন্দিৰত ৫ দিনীয়া মনসা পূজা।</li>
        <li>২৭-মহাপুৰুষ শঙ্কৰদেব বংশৰ শ্রীশ্রীকোৱামাৰা সত্ৰৰ জীৱকৃষ্ণ দেব মহন্ত, হাতীচোং কঠালকুচি দহঘৰীয়া সত্ৰৰ বৰগায়ন ঘনশ্যাম বৰা আৰু জগত চন্দ্ৰ মহন্তৰ তিঃতিঃ কি বেলতাৰ সত্ৰাধিকাৰ গনেশ্বৰ কুটুমৰ জন্মদিৱস। আন্তর্জাতিক পৰিচাৰ্য্যা দিবস।</li>
        <li>২৯-ৰাষ্ট্রীয় ঐক্য দিবস।</li>
        <li>৩০-পশ্চিম চামতা গোপূজাস্থানত ভঠেলী উৎসৱ। (নদলা গাওঁৰ চৌপূজা)। </li>
        <li>৩১-শ্ৰীশ্ৰীসত্যনাৰায়ন ব্রত।</li>
      </ul>
      
      
      </div>
    </>

   
  )
}
