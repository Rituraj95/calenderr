import React from 'react'

export default function Calneder1() {
  const customDays = [
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
    { day: '', content: '', color: 'white' },
  

    { day: '১', content: 'Feb 14', color: 'white' },
    { day: '২', content: 'Feb 15', color: 'white' },
    { day: '৩', content: 'Feb 16', color: 'white' },

    { day: '৪', content: 'Feb 17', color: 'white' },
    { day: '৫', content: 'Feb 18', color: 'red' },
    { day: '৬', content: 'Feb 19', color: 'white' },
    { day: '৭', content: 'Feb 20', color: 'white' },
    { day: '৮', content: 'Feb 21', color: 'white' },
    { day: '৯', content: 'Feb 22', color: 'white' },
    { day: '১০', content: 'Feb 23', color: 'white' },
    { day: '১১', content: 'Feb 24', color: 'white' },
    { day: '১২', content: 'Feb 25', color: 'red' },
    { day: '১৩', content: 'Feb 26', color: 'white' },
    { day: '১৪', content: 'Feb 27', color: 'white' },
    { day: '১৫', content: 'Feb 28', color: 'white' },
    { day: '১৬', content: 'Feb 29', color: 'white' },
    { day: '১৭', content: 'march 1 ', color: 'white' },
    { day: '১৮', content: 'march 2', color: 'white' },
    { day: '১৯', content: 'march 3', color: 'red' },
    { day: '২০', content: 'march 4', color: 'white' },
    { day: '২১', content: 'march 5', color: 'white' },
    { day: '২২', content: 'march 6', color: 'white' },
    { day: '২৩', content: 'march 7', color: 'white' },
    { day: '২৪', content: 'march 8', color: 'white' },
    { day: '২৫', content: 'march 9', color: 'white' },
    { day: '২৬', content: 'march 10', color: 'red' },
    { day: '২৭', content: 'march 11', color: 'white' },
    { day: '২৮', content: 'march 12', color: 'white' },
    { day: '২৯', content: 'march 13', color: 'white' },
    { day: '৩০', content: 'march 14', color: 'white' },
  


    // ... Add more days as needed
  ];
  return (
    <>
        
                <div>
     

                <div className="month"
    style={{
    backgroundImage: `url(${require('./Asset/tea.jpg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}>
       <ul>
        
         <li>
         ফাগুন (Feb-march)<br />
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


    <ul>
        <li>
    
১-শ্রীপঞ্চমী। শ্রীশ্রীলক্ষ্মীসৰস্বতী পূজা। মস্যধাৰলেখনী পূজা। মহাবিষুব অৱতাৰ অদ্বৈত্য আচাৰ্য্যৰ আবির্ভার তিথি। বঙিয়া বিছেল্লালাত ৫ দিনীয়া বিষ্ণুযজ্ঞাবন্ত। জামুগুৰীহাটত লক্ষ্মীজনাদন মন্দিৰৰ প্রতিষ্ঠা দিবস। ভেলেন্টাইন দিৱস। মিছিং সমাজৰ আলি আই লিগাং উৎসৱ। ২-বুৰঘোপাত মনসা পূজা। দক্ষিণপাট সত্রত বিভূদেব গোস্বামী, গোলাঘাট বৰপথাৰ ৰত্নাকৰ সত্ৰত সোমেশ্বৰ গোস্বামী, ধোপাবৰ সত্ৰত প্রফুল্ল দেব মহন্ত, বাগিচাআলি গোলাঘাটৰ কৃষ্ণকান্ত ফুকন আৰু লোক্রাই বামুন্দি সভাধিকাৰ নৰনাৰায়ণ দেৱ গোস্বামীৰ তিঃতিঃ। স্বং জিলাৰ ওৰাং মৌজাৰ গেলাবিল সত্রত অখণ্ড পালনাম। শৰণীয়া কছাৰী ছাত্রসস্থাৰ প্রতিষ্ঠা দিবস।৩-ভীষ্মাষ্টমী কৃত্যু। নগাঁও নৰোৱা বালিসব্রত কন্দর্প দের। গোস্বামীৰ তিঃতিঃ। উৎসর বায়দা গাঁৱত। নগাঁও বঢ়মপুৰত শ্রীশ্রীজগন্নাথ মন্দিৰত হোমযজ্ঞবে মন্দিৰৰ প্ৰতিষ্ঠা দিৱস। কৰ্ম্মবীৰ নবীন চন্দ্ৰ বৰদলৈৰ স্মৃতি দিবস। বৰনগৰত শিল্পী গোঁসাইৰ নৱস্থাপন দিৱস।৪- তাৰাবাড়ি কালশিলা ১ সত্রত লক্ষীদেব আৰু বৰঠাই নগৰীয়া সত্ৰৰ ৰাধানাথ। নাথ গোস্বামীৰ তিঃতিঃ। ব বনগাঁৱৰ ৫ দিনীয়া সভা মহোৎসৱ ।৫-সাহিত্যৰস্তু হবিনাৰায়ন দত্তবুৰুৱাৰ তিঃতিঃ। পছৰীয়া (হাওঁৰাপাৰ) গাওঁত সার্ব্বজনীন শ্রীশ্রীলক্ষ্মীপূজা।৭-দিহিং নমাটি সন্ত্রত। (নাজিবা) জীৱকান্ত দের আৰু শুভকান্দলি সত্রত প্রতিষ্ঠাতা নাৰায়ণ দেৱৰ তিঃতিঃ। বৰবাৰী গোবিন্দপুৰ সুন্দৰদিয়া, শ্রীশ্রীহয়গ্রীর মাধর দোমোঠাব ব গুৰি, ৰামদিয়া দে দেৱ দামোদৰ সংঘৰ উদ্যোগত ৰামদিয়াত, বংশৰ দেৱদামোদৰ সংঘৰ উদ্যোগত বংশৰ আদি সত্ৰত মহাপুৰুষ শ্রীশ্রীদামোদর দেবব আবির্ভাব তিথি। দামোদৰাব্দ ৫৩৬ আবম্ভ। বালি সত্রত গোপাল দেব প্রভুৰ ২ দিনীয়া সভা। কাৰিপাৰা জগন্নাথ মন্দিৰত সভা। সর্বজয় আশ্রমত সভা, কনিমাৰা গাৱঁৰ সভা। দৌলাশালৰ সভা। জালাকাটা গাঁৱত কল্কি পূজা। আমদহ বৰলাত গোপাল থানত সভা। কাউৰা ভহাত কীৰ্ত্তন পাঠ মহোৎসব। ধৰ্ম্মপুৰ সত্ৰত টেপু আতৈৰ তিথিপালন। ঘগ্ৰাপাৰ আকনা বামুন গাঁৱত মহাপ্রভু জগন্নাথ মন্দিৰত ২ দিনীয়া গৰখীয়া সভা। চাপৰমুখৰ মা বসুন্ধৰী আই থানত ৩ দিনীয়া মহোৎসব। খাগ্রাবাৰীত বুটা গোসাই কীৰ্ত্তন ঘৰৰ সভা। উগ্রসেন মাজিউবুঢ়াৰ তিথি উপলক্ষে মাজিব সভা ৭ দিন ব্যাপি। কার্বি জনগোষ্ঠীব দুদিন ব্যাপি দেহাল পূজা (কাৰ্বি দেহাল কাচিৰ দ'ম)।৯-আউনীআটী সত্ৰাধিকাৰ কমল চন্দ্র দেব গোস্বামীর তিঃতিঃ। আস্তবাষ্ট্রীয় মহিলা দিবস।১১-মাঘী পূর্ণিমা। সন্ধিয়া শ্রীশ্রীসত্যনাবায়ন ব্রত। ধর্মাচার্য্য শ্রীশ্রীবংশী গোপাল আবিভার তিথি। ৭ দিন ব্যাপি সৰ্থেবাৰীৰ সভা। এমাহ ব্যাপি ভূটীয়া দৰঙীয়া মেলা। সূৰ্য্য পাহাৰত ৩ দিনীয়া মহাযজ্ঞ মেলা। জিনকাটা সত্রত প্রতিষ্ঠা দিবস পালন। মধ্যবাস্তাব আঙ্গাবা ধোবা গাঁৱৰ গোপাল আশ্রমত ৩দিনীয়া উৎসব। দক্ষিণপাৰ পূব মাজিব গাঁর (মথাউবী) বাঘমাবীত দুই দিনীয়া সভা। শালদহৰ সভা। মালিবাড়ী টাৰিগাঁৱত বিষ্ণুম্ভা। নসত্র কৃষ্ণণ্ডক সেবাশ্রমত বিশ্বশান্তি কল্কি পূর্ণিমা পালন। ববলা সন্ত্রত • বাসুদেব কীৰ্ত্তন ঘৰত নামযজ্ঞ। বৰটাপা গাঁও, পাঠশালা হৰিমন্দিবত পালনাম। কালাই গাঁৱত ভাগবত মন্দিৰত ৩ দিনীয়া অখণ্ড নাম যজ্ঞাৰম্ভ। সানেকুছি ওজাতোলা গাঁৱত গোপাল গোসাই প্রাঙ্গনত মাঘী পূর্ণিমা উৎসর। বনগাঁও ৰাজহুৱা হৰিমন্দিৰত অষ্টপ্রহৰ হৰি সংকীর্তন। পাঠশালা হবিমন্দিত পালনাম। নানকাৰভাবা মূলীসত্ৰত ৭ দিন ব্যাপি নামকীর্তন মহোৎসর। গোৱালপাৰা শ্যামৰায় সত্রত মহাপুৰুষ শ্রীশঙ্কবদেবৰ পুতঃ অস্থি প্রতিষ্ঠা দিবস। যোৰহাট নেহেক পার্ক বিষ্ণু মন্দির, জালুৰিগোগ কৃষ্ণ নগৰ আৰু ধৰমতুল বিষ্ণু মন্দিৰত তিনিদিনীয়াকৈ বিষ্ণুযন্ত্র মহোৎসর। - বৰবালিসিঠা গর্বিত তিনিদিনীয়া ভেকুলী কন্দা দেউল উৎসর। উপাৰ্জটীয়া বামন পাবা বংশী গোপালৰ তিনি দিনীয়া আৰু বৰপানাৰা বাবগোপাল মন্দিৰত দৌল উৎসব। ছাটাবাৰী গাঁৱৰ শ্ৰীশ্ৰীকলীয়া গোসাইব দুদীনিয়া - বার্ষিক সভা। তলিবিল নবোরা সত্রত উষা দেবীব তিঃতিঃ বীৰ চিলাৰায়ৰ আবির্ভার মহোৎসব। গহপুৰ শঙ্কৰদের চোই গাঁও সত্ৰাধিকাৰ হবিৰাম ভাগৱতী আতাৰ তিঃতিঃ।১৩-সবেবৰাৎ।১৪-আউনীআটী সত্রত নিবঞ্জন দেবব তিঃতিঃ।১৬-কানিকুছি গাঁৱত ৩ দিনীয়া মনসা পূজা। ১৭-মাজুলী চামগুবি সত্ৰৰ চক্রপানী দেবৰ তিঃতিঃ।১৮- এলেডি বালি সত্রত বত্নকান্ত দেব অধিকাৰী আৰু নতুন কমলাবাৰী সূত্রব বামেশ্বৰ শৰ্ম্মাদেবৰ তিঃতিঃ। ১৯- নলবাৰীৰ প্রণবেশ বকরাৰ তিঃতিঃ।২১-আর্য্য সমাজ প্রতিষ্ঠাপক স্বামী দয়ানন্দ সৰস্বতীৰ জন্ম দিবস। নগাঁও জিলাৰ বাইডঙ্গীয়া দীঘলী সত্ৰৰ ডেকাধিকাৰ প্রতাপ চন্দ্র দেৱমহস্ত আৰু মৰিগাঁও শুকদ'ল বৰবৰি শলগুৰি সত্ৰৰ সত্ৰাধিকাৰ ডিম্বেশ্বৰ মহন্তৰ তিঃতিঃ।২২-কামৰূপৰ দক্ষিণপাৰ পূব মাজিৰ গাঁও শিলপোটা সত্রত অহ্যেবাত্র পালনাম। ২৩-বাসুদের থান নবোরা সত্ৰৰ স্বাধীনতা সংগ্রামী শিবচন্দ্র দের গোস্বামীৰ তিঃতিঃ। ২৪-স্মার্ত্তমতে শ্রীশ্রীশিবৰাত্রি ব্রত। ডুবি দেবালয়ত উৎসর। গোমুঢ়া গঢাবিলব সভা, ভালুকী, কুলবিল শিবাশ্রম, দুধগুড়া পাহাৰৰ শিরমন্দিৰ, বৰখালা বুঢ়া গোসাই থান, মুক্তৰীয়া শিবশক্তি দেবালয়, পলাশৰ তল, পাটাছাৰকুছি, শিৱসাগৰ কৃষ্ণাই, টোবাৰী শিৱসাগৰৰ শিবদৌলত দৰঙৰ সৰু থেকেৰাবাৰী শিব মন্দিৰ, মৌৰা সত্র, মনাহকুছি জয়পাল শিব মন্দির, হাজলপাৰ কালি মন্দিৰ দৰংজিলাৰ হাজৰিকাপাৰাৰ শ্রীশ্রীশালমাছ উঠা শিবমন্দিৰ, উপৰকুকরা গাঁওৰ শ্ৰীশ্ৰীবুঢ়াগোসাই আৰু শ্রীশ্রী ীন গোসাই ধান আদিত শিববাত্রি মহামেলা আৰু পুজা উৎসব। বুঢ়া গোসাই থান আৰু মনাহকুছি দত্তচুপা গার্ব আৰু বাঙ্গাজিলাৰ মুৰমেলা গাওঁত শ্রীশ্রী ভোলাপুখুৰীত তিনিদিন ব্যাপি। শিব মন্দিৰত শিববাত্রি ব্রত পালন। মাজগাঁও (নগাঁও) সার্কভি ) সাকজিনীন শিবমন্দিৰত চাৰিদিনীয়ী শিৱৰাত্রি উৎসব। ।দখলা বুঢ়াগোহাঁই দেৱালয়ত ৩ দিনিয়া শিৱৰাত্রি পালন। কাব্য ভাবতী ধর্ম্মেশ্বরী। ভাবর্তী ধর্ম্মেশ্বরী দেবীর বী বৰুৱানীৰ স্মৃতি দিৱস। ২৫-১ নং সবিস্কব গাঁৱৰ গুনা সত্রত বিষ্ণুদেব গোস্বামী, উলতলী এলেঙ্গী সত্রাধিকাৰ কেশর চন্দ্র দেব গোস্বামী আৰু উত্তৰলক্ষীমপুৰ ডাংধৰা সত্ৰত সেমিদের গোস্বামীৰ তিঃতিঃ। দুদিন ধৰি হাতীশিলা আৰু কলিতাপাৰা শিবমেলা। মাখিবাহা গাঁৱত ৭। দিন ব্যাপি সভা, হাজল পাৰ কালি মন্দিৰত কালিপূজা। মধ্যমেটুৱাকুছি গৰখীয়া নামঘৰৰ প্ৰতিষ্ঠা দিবস। ২৬-পাটবাউসী শঙ্কৰদেৱ থানৰ মন্দোদৰী মিশ্রব তিঃতিঃ। বেলগুৰি সত্ৰত শ্ৰীশ্ৰীমন্ত শঙ্কৰদেৱ নামধৰ্ম্ম সমাজ অসমৰ প্রতিষ্ঠা দিৱস।২৭- ছমৰীয়া সত্ৰত দক্ষিণকুলীয়া বৰবিষ্ণু আতাৰ তিঃতিঃ। দীঘলকুছি সত্ৰত দক্ষিণ কুলায়া বৰবিষ্ণু আত্ৰৰ তিথি উপলক্ষে ৩ দিনীয়াকৈ তিথি উৎসব। ২৮-ৰামকৃষ্ণ পৰমহংসদেবৰ জন্মতিথি। নগাঁওৰ কৰতিপাৰ নসত্ৰৰ সত্ৰাধিকাৰ মহেন্দ্র নাথ গোস্বামীৰ তিঃতিঃ। বমজান মাহব প্রথম দিবস। ২৯-গন্ধিয়াৰ পণ্ডিত আদ্যনাথ ভট্টাচার্য্য, ডাঁহী বামুন্দী সত্রত সত্ৰাধিকাৰ সত্ৰাধিকাৰ অনন্ত দের গোস্বামী, এলেডি নৰসিংহ সত্ৰত লীলাকান্ত দেব আৰু চাৰাবাডি সত্ৰৰ সত্ৰাধিকাৰ ঘনকান্ত দেব অধিকাৰী আৰু ক্ষুদিয়া সত্ৰৰ সত্ৰাধিকাৰ ডাঃ হৰেকৃষ্ণ গোস্বামীৰ তিঃতিঃ।৩০-সন্ধিয়া শ্রীশ্রীসত্যনাৰায়ণ ব্রত। ৰঙিয়া বিছেন্নালাত ৫ দিনীয়া বিষ্ণুযজ্ঞাবন্ত। ফুলগুৰিত ব্রহ্মসত্র আশ্ৰমৰ ২। দিনীয়া সভা।
        </li>
    </ul>

  </>
  )
}
