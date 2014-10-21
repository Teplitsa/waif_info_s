region_list = '["Республика Адыгея","Майкоп","Республика Башкортостан","Уфа","Республика Бурятия","Улан-Удэ","Республика Алтай","Горно-Алтайск","Республика Дагестан","Махачкала","Республика Ингушетия","Назрань","Кабардино-Балкарская Республика","Нальчик","Республика Калмыкия","Элиста","Республика Карачаево-Черкессия","Черкесск","Республика Карелия","Петрозаводск","Республика Коми","Сыктывкар","Республика Марий Эл","Йошкар-Ола","Республика Мордовия","Саранск","Республика Саха (Якутия)","Якутск","Республика Северная Осетия-Алания","Владикавказ","Республика Татарстан","Казань","Республика Тыва","Кызыл","Республика Удмуртия","Ижевск","Республика Хакасия","Абакан","Чеченская республика","Грозный","Чувашская Республика","Чебоксары","Алтайский край","Барнаул","Краснодарский край","Краснодар","Красноярский край","Красноярск","Приморский край","Владивосток","Ставропольский край","Ставрополь","Хабаровский край","Хабаровск","Амурская область","Благовещенск","Архангельская область","Архангельск","Астраханская область","Астрахань","Белгородская область","Белгород","Брянская область","Брянск","Владимирская область","Владимир","Волгоградская область","Волгоград","Вологодская область","Вологда","Воронежская область","Воронеж","Ивановская область","Иваново","Иркутская область","Иркутск","Калининградская область","Калининград","Калужская область","Калуга","Камчатский край","Петропавловск-Камчатский","Кемеровская область","Кемерово","Кировская область","Киров","Костромская область","Кострома","Курганская область","Курган","Курская область","Курск","Ленинградская область","Санкт-Петербург","Липецкая область","Липецк","Магаданская область","Магадан","Московская область","Москва","Мурманская область","Мурманск","Нижегородская область","Нижний Новгород","Новгородская область","Новгород","Новосибирская область","Новосибирск","Омская область","Омск","Оренбургская область","Оренбург","Орловская область","Орел","Пензенская область","Пенза","Пермский край","Пермь","Псковская область","Псков","Ростовская область","Ростов-на-Дону","Рязанская область","Рязань","Самарская область","Самара","Саратовская область","Саратов","Сахалинская область","Южно-Сахалинск","Свердловская область","Екатеринбург","Смоленская область","Смоленск","Тамбовская область","Тамбов","Тверская область","Тверь","Томская область","Томск","Тульская область","Тула","Тюменская область","Тюмень","Ульяновская область","Ульяновск","Челябинская область","Челябинск","Забайкальский край","Чита","Ярославская область","Ярославль","Еврейская автономная область","Биробиджан","Ненецкий автономный округ","Нарьян-Мар","Ханты-Мансийский автономный округ - Югра","Ханты-Мансийск","Чукотский автономный округ","Анадырь","Ямало-Ненецкий автономный округ","Салехард","Республика Крым","Севастополь"]';  

// нет 5 субектов 
function region_select_html_str(){ 
// возвращает html для select с регионами 
//где value индекс в массиве region list


var sst = "<select id='region_list' class='select_reion_css'>";
sst += "<option value='p1'>Москва</option>";
sst += "<option value='p2'>Санкт-Петербург</option>";
for(var i=0;i<waif.region_ar.length-1;i+=2){
sst += "<option value='"+i+"'>";
 sst+=waif.region_ar[i]; 
sst += "</option>";
}
sst += "</select>";

return sst;
}//region select html str