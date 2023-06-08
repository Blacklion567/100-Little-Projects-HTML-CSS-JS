const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");
const today = new Date();
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

const getData = () => {
  header.innerHTML =
    '<img src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t39.30808-6/319894083_1321219765294946_7662488476770051270_n.jpg?stp=c237.0.607.607a_dst-jpg_s851x315&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeFBDyL5TVkD8_LuARLnNawOlzYj-gJb3tmXNiP6Alve2dzQafUuwrJh2rGs8AUqDN8D5KHu-QLiK6aklr-Rt0Rp&_nc_ohc=GC6hFNHPpD8AX_QxxAz&_nc_zt=23&_nc_ht=scontent.fmnl25-1.fna&oh=00_AfB_Z3abeglDlxv-QoOFhLYv8e9nt64rQpYWBNg3SmghwA&oe=648695D3" alt="Blacklion567" />';
  title.innerHTML = "Aristides Phobos";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  profile_img.innerHTML =
    '<img src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/329825856_611654244058610_4240970714858413786_n.jpg?stp=c0.84.768.768a_dst-jpg_s851x315&_nc_cat=105&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeERoAc_Fw2JUVJDm9ShLz8XY4uXDh2DYzJji5cOHYNjMiwaFIY8XiwhWdTVrEoDmu0-FMu4T0mo-LwiRJtC5OgD&_nc_ohc=K9K7NOBVIkYAX8BnjK1&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfCf_mAfbv1P57TH8kNSz5cDi2StDuv5k2_Xc-UkztaOwg&oe=6485F9F8" alt="Error" />';
  name.innerHTML = "Blacklion567";
  date.innerHTML = `${monthNames[today.getMonth()]
    } ${today.getDate()}, ${today.getFullYear()}`;
  animated_bgs.forEach((background) =>
    background.classList.remove("animated-bg")
  );
  animated_bg_texts.forEach((background) =>
    background.classList.remove("animated-bg-text")
  );
};

setTimeout(getData, 2500);