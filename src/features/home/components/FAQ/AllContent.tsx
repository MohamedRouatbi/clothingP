import { FunctionComponent, useState } from "react";
import InstancePlaceholder from "./InstancePlaceholder";
import styles from "./AllContent.module.css";

const FAQ_ITEMS = [
  {
    question: "كم اسعار غسيل الملابس في المغسلة؟",
    answer:
      "اسعار غسيل الملابس عندنا تختلف حسب نوع الملابس والخدمة (غسيل وكوي، كوي فقط، تنظيف جاف، عناية خاصة). تطبيق أبطال الغسيل يعطيك تسعيرة فورية وشفافة قبل تأكيد الطلب، فتعرف التكلفة قبل ما تتأكد. أسعارنا تعتبر من أنسب الأسعار في مغاسل الملابس في جدة مقارنة بالمغاسل التقليدية.",
  },
  {
    question: "هل تتوفر مغسلة ملابس قريبة مني في جدة؟",
    answer:
      "نعم، أبطال الغسيل هي مغسلة ملابس قريبة من جميع أحياء جدة. مندوبنا يستلم الملابس من الباب ويرجعها بعد الغسيل والكوي، فما تحتاج تبحث عن مغسلة ملابس قريبة فعليًا — التطبيق هو مغسلتك. نخدم السلامة، الروضة، الشاطئ، النهضة، الصفا، النسيم، الفيحاء، الحمدانية، وباقي أحياء المدينة.",
  },
  {
    question: "هل تقدمون تنظيف جاف للملابس؟",
    answer:
      "نعم، نوفر خدمة التنظيف الجاف للقطع الحساسة والبدل والملابس الرسمية. فريقنا يحدد الطريقة المناسبة لكل قطعة بناءً على نوع القماش وتعليمات العناية.",
  },
  {
    question: "كيف أطلب من مغسلة ملابس توصيل؟",
    answer:
      "حمّل تطبيق أبطال الغسيل، اختر الخدمة المناسبة (غسيل وكوي، كوي فقط، تنظيف جاف، عناية خاصة)، وحدد موعد الاستلام. مندوبنا يجيك للباب، يأخذ الملابس، وتتابع كل خطوة من التطبيق حتى يوصلها لك نظيفة ومكوية.",
  },
  {
    question: "ما هي أفضل مغسلة ملابس في جدة؟",
    answer:
      "أبطال الغسيل تعتبر من افضل مغاسل الملابس في جدة بفضل تقييمات العملاء (5 نجوم على App Store و Google Play)، الأسعار الشفافة، وخدمة الاستلام والتوصيل. مغسلة الملابس المثالية هي اللي تجيك للباب وتوفر عليك الوقت والجهد — وهذا اللي نقدمه.",
  },
  {
    question: "هل تغسلون جميع أنواع الملابس؟",
    answer:
      "نعم، نخدم جميع أنواع الملابس: الملابس اليومية، البدل والملابس الرسمية، الثوب والفساتين، ملابس الأطفال، والقطع الحساسة من أنواع الأقمشة المختلفة. نختار طريقة التنظيف المناسبة لكل قطعة لضمان الحفاظ على جودة القماش.",
  },
  {
    question: "كم يستغرق غسيل الملابس وكيها؟",
    answer:
      "مدة الخدمة تعتمد على نوع الطلب والكمية. التطبيق يعطيك الموعد المتوقع للتسليم عند تأكيد الطلب، وتقدر تتابع حالة ملابسك خطوة بخطوة من خلال التطبيق.",
  },
  {
    question: "هل خدمة الاستلام والتوصيل مجانية؟",
    answer:
      "نعم، خدمة استلام وتوصيل الملابس للباب جزء من خدمة أبطال الغسيل داخل أحياء جدة. ما تحتاج تتنقل أو تضيع وقتك — مغسلة ملابس توصيل كاملة من بيتك ولبيتك.",
  },
];

export type AllContentType = {
  className?: string;
};

const AllContent: FunctionComponent<AllContentType> = ({ className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className={[styles.allContent, className].join(" ")}>
      <section className={styles.faqHeader}>
        <div className={styles.background}>
          <b className={styles.b}>الأسئلة الشائعة</b>
        </div>
        <div className={styles.wrapper}>
          <h2 className={styles.h2}>
            <span>{`أسئلة شائعة عن غسيل وكي `}</span>
            <span className={styles.span}>الملابس</span>
          </h2>
        </div>
      </section>
      <div className={styles.faqQuestions}>
        <div className={styles.faqQuestionsChild} />
        <div className={styles.questionsContainer}>
          {FAQ_ITEMS.map((item, index) => (
            <InstancePlaceholder
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllContent;
