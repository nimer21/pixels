import img_goal from "../assets/img/goal-icon-for-your-project.jpg";
const Messages = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="w-full object-cover md:h-48"
            src={img_goal}
            alt="Project Goal"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-lg text-indigo-500 font-extrabold text-center">
            الهدف من المشروع
          </div>
          <p className="mt-2 text-slate-500 text-justify">
            <a
              href="#"
              className="inline-block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              رفضاً للدور الذي أراده لنا المستعمر،&nbsp;
            </a>
            رفضاً للدور الذي أراده لنا المستعمر، رفضاً للتبعيّة العمياء، ورفضاً
            للدّوَران في عجلةِ استهلاكٍ تصبّ أرباحَها في إنتاج أسلحة فتاكة لم
            تجلب للبشرية عامةً ولشعوبنا العربية والإسلامية خاصةً إلا القتل
            والدمار، ورفضاً للدور الذي يريده مستعمرونا لنا: "مغلوبٌ مفتون باتباع
            غالبه"؛ أنشأنا هذه الصفحة سعياً منا لخلق شبكة تجارية تخصّنا، لجمع
            آلاف المشاريع المحليّة التي تساهم بالارتقاء باقتصادنا وتجارتنا؛
            للتّحرر مع الوقت شيئاً فشيئاً من الاعتماد التام على الغرب في معظم
            أمور حياتنا..
          </p>
          <p className="mt-2 text-slate-500 text-justify">
            بعنادٍ عربيٍّ نبدأ خطوةً جديدةً تتلوا المقاطعة، وهي الاستغناء،
            الاستغناء عمّا ينتجه الغرب لنا، عبر تشكيل نواةٍ لشبكةٍ تجاريةٍ
            محلّيّة، تؤسس لإيجاد سوقٍ عربيٍّ منتجٍ وآمن، قائم على التكامل بين
            الشعوب العربية، إذ يدفعها للاعتماد على ما تنتجه بنفسها ولأجلها
            بالدرجة الأولى، والثقة بمنتجها الوطنيّ والمحليّ، فهو قادرٌ على
            المنافسة العالمية، بل ويفوق في جودته كثيراً من منتجات الشركات
            العملاقة التي غزت أسواقنا..
          </p>
          <p className="mt-2 text-slate-500 text-justify">
            وعليه، فإن هذه الصفحة فضاءٌ واسعٌ، نودّ تلوينه بمنتجات بلادنا
            العربية والإسلامية، مشروعٌ من الشعوب العربية وإليها؛ إذ نُبادر
            لإيجاد البدائل المحلية، ونجمعها في مكانٍ واحد ليَسهُل عرضُها أمام
            مجتمعاتنا التي باتت تبحث عن المحلّي كميزةٍ خاصة للمنتج، ونريدها
            إعلاناً لافتاً مميزاً طويل الأمد وغير مكلف لأصحاب المشاريع المحليّة،
            حيث ثمن تأجير مساحة الإعلان الواحدة فيها (المتمثّلة بخليّةٍ إعلانيةٍ
            واحدة): 140 دينار أردني - مؤقتاً - (مما لا يجعله مكلفاً مقارنةً
            بأسعار الإعلانات عامةً)، على أن يستمر عرض الإعلان المتفق عليه على
            الصفحة حتى بدء العام 2030 للميلاد.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Messages;
