import { useState } from "react";
import imageTobase64 from '../helpers/imageTobase64';

const Analytics = () => {

return (
    <div className=" bg-slate-500">
    <h1 className="text-3xl bg-slate-600 p-4 mb-8 text-center text-white">الشروط:</h1>

    <p className="mr-5">في حال أردتم استئجار "مساحة إعلان" لعرض منتجكم المحلي في الفضاء الذي يحتويه هذا الموقع لتأجير المساحات يجب أن تكونوا على اطلاع بالشروط التالية:</p>
    <ul>
      <li>يتم تأجير البكسل الواحد في هذا الفضاء ب: 1 دينار أردني، والفضاء هذا مقسّم إلى "مربعات"، كل مربع فيه يحتوي على 100 بكسل، وذلك لأن حجم البكسل أصغر من أن يُظهِر الإعلان واضحاً ضمن هذا الفضاء. وعليه، فإن أقل ما يمكن استئجاره من مساحة المليون بكسل ليظهر الإعلان بوضوحٍ هو: مربع واحد (أي 100 بكسل) بحد أدنى، وأكثر ما يمكن استئجاره من هذه المساحات هو: 100 مربع (أي: 10,000 بكسل) بحد أقصى، والبيع بعدد المربعات (أي: لا يمكن شراء نصف مربع) .. وسيستمر عرض الإعلانات كلها على هذا الموقع حتى لحظة الدخول في العام 2030 للميلاد، إذ تتوقف لحظتها الإعلانات المعروضة في فضاء البكسل جميعها.</li>
      <li>تأجير مساحات البكسل فقط لمن يودّ عرض منتجٍ محليّ غير داعم للاحتلال المغروس في قلب الوطن العربي. وعليه، إن قامت شركة ما بعرض إعلانها في فضاء المليون بكسل ثم تبيّن دعمها للاحتلال في أيّ وقتٍ من لحظة عرض إعلانها وحتى انتهاء فترة العرض (بدء العام 2030م)؛ سيتم وقف عرض الإعلان الخاص بها، وستفقد الحق في استئجار أي مربعٍ آخر على الموقع لاحقاً، وسيتم إعادة طرح ذلك المربع بعد عودته مساحةً فارغة للتأجير لصالح إعلانٍ جديد.</li>
      <li>الشركة التي تستأجر مربعاً أو أكثر من مربع ضمن هذا الفضاء، لا يمكن لها تغيير إعلانها - المتّفق عليه- بعد عَرضه على الموقع واستبداله بآخر، أو تغيير رابط الإعلان الذي تم استئجار المِساحة لأجله، خلال الفترة المتفق عليها لعرض الإعلان في النقاط السابقة. (إن شاءت الشركة إيقاف تفعيل الرابط الموصول بصورة منتجها المعروضة في فضاء البكسل، أو إبقاؤه يعمل، هذا حقها الخالص، لكن لا يمكن تغييره واستبداله بغيره) مع التأكيد على حقها في شراء مربعات جديدة في حال امتلاكها لأكثر من منتجٍ محلّي تودّ عرضه في هذا الفضاء الكبير الملوّن بكل ما هو محليّ.</li>

    </ul>
  
  </div>
);
};
export default Analytics;
