import "./e.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
// Image imports (replace with your real images)
import thy from "../../assets/crown.jpg";
import pl from "../../assets/plum.jpg";

// ------------------------------------------------------------------
// ACCOMMODATION DATA
// ------------------------------------------------------------------

const allHotels = [
  // -------- Vintage Park --------
  {
    category: "Vintage Park",
    title: "The Element (By Westin)",
    desc: "14555 Vintage Preserve Parkway, Houston, TX 77070 · 281.379.7300",
    link: "https://www.marriott.com",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/64/92/9d/exterior.jpg?w=900&h=500&s=1"
  },
  {
    category: "Vintage Park",
    title: "Springhill Suites (By Marriott)",
    desc: "20303 Chasewood Park Dr., Houston, TX 77070 · 832.953.2220",
    link: "https://www.marriott.com",
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/8c/56/2a/front-desk-market.jpg?w=900&h=500&s=1'
  },
  {
    category: "Vintage Park",
    title: "Hyatt Place",
    desc: "20330 Tomball Parkway, Houston, TX 77070 · 832.930.8090",
    link: "https://www.hotelplanner.com/Hotels/230330/Reservations-Hyatt-Place-Houston-Nw-Vintage-Park-Houston-20330-Tomball-Pkwy-77070#content",
    img: "https://hotelmedia.s3.amazonaws.com/720/480/982d1f69b5466ea61471ac6dedd86624c9ab8507"
  },
  {
    category: "Vintage Park",
    title: "Holiday Inn & Suites",
    desc: "18530 TX-249, Houston, TX 77070 · 281.612.1850",
    link: "https://www.guestreservations.com/holiday-inn-express-and-suites-hou-i-10-west-energy-corridor/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=431076850&msclkid=22f13aa0a85c1ac488ff538ab2d8adab&ctTriggered=true",
    img: 'https://images.getaroom-cdn.com/image/upload/s--WVq0HV-8--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1748459662/b539e18c2a59a24eede182e421ae1421568551aa?_a=BACAEuDL&atc=e7cd1cfa'
  },
  {
    category: "Vintage Park",
    title: "Hilton Garden Inn",
    desc: "7979 Willow Chase Blvd, Houston, TX 77070 · 832.912.1000",
    link: "https://www.hilton.com/en/hotels/houhngi-hilton-garden-inn-houston-nw-willowbrook/?msockid=0dc7f3ca518d6cca2cfce57b504d6d40",
    img: 'https://www.hilton.com/im/en/HOUHNGI/22873403/houhngi-aerial-1.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=267&rw=768&rh=430'
  },
  {
    category: "Vintage Park",
    title: "Courtyard (By Marriott)",
    desc: "11050 Louetta Rd., Houston, TX 77070 · 281.374.6464",
    link: "https://www.reservationdesk.com/hotel/61376ff/courtyard-houston-kingwood-kingwood-texas/?cid=sem::TPRD::BA::Reservation%20Desk%20%3E%20Performance%20Max%20%3E%20Marriott::US%20%3E%20Texas%20%3E%20Kingwood%20%3E%20Courtyard%20Houston%20Kingwood%20%3E%20did-61376ff%20%3E%20101938943::www.reservationdesk.com::b&creative=82944817247908&device=c&utm_source=bing&utm_medium=cpc&utm_term=www.reservationdesk.com&utm_campaign=Reservation%20Desk%20%3E%20Performance%20Max%20%3E%20Marriott&iv_=__iv_m_b_c_82944817247908_k_2334744223108158_w_kwd-2334744223108158:loc-190_g_1327113192412685_n_o_e__h_147906_ii_73614_p_2_b_bb_d_c_vi__&msclkid=1ee6e098d85d12149ee889b2c3f4da90",
    img: 'https://img.travelpass.com/hotel/61376ff/102287531/0/x700'
  },

  // -------- Spring --------
  {
    category: "Spring",
    title: "Houston Cityplace Marriott at Springwoods Village",
    desc: "1200 Lake Plaza Dr., Spring, TX 77389 · 281.350.4000",
    link: "https://www.guestreservations.com/houston-cityplace-marriott-at-springwoods-village/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=431076854&msclkid=6e097201846b1a83e0211b2b98283cc7",
    img: "https://images.getaroom-cdn.com/image/upload/s--t6dH2jY---/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1751841241/7c985eb3b80b30b5edfc7d39340cb0123bcc2748?_a=BACAEuDL&atc=e7cd1cfa"
  },
  {
    category: "Spring",
    title: "Hilton Garden Inn",
    desc: "23535 Northgate Crossing Blvd., Spring, TX 77373 · 281.528.2900",
    link: "https://www.guestreservations.com/hilton-garden-inn-schaumburg/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=373114030&msclkid=d7ec6db3eb1c15c9585c0499f77251a1",
    img: 'https://images.getaroom-cdn.com/image/upload/s--C76qAAEK--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1751636236/057ba6ffc568a3bc13960aa971ff4f32e622b050?_a=BACAEuDL&atc=e7cd1cfa'
  },
  {
    category: "Spring",
    title: "Courtyard (By Marriott)",
    desc: "22742 Holzworth Rd., Spring, TX 77389 · 281.353.1910",
    link: "https://www.guestreservations.com/courtyard-fort-worth-at-alliance-town-center/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=431076851&msclkid=83b64c042bd812191141252e373d423d",
    img: "https://images.getaroom-cdn.com/image/upload/s--UDIcNCFF--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1755829579/529d9fecb24952f6c196fb3cfc6c722b952ae528?_a=BACAEuDL&atc=e7cd1cfa"
  },

  // -------- Tomball --------
  {
    category: "Tomball",
    title: "Staybridge Suites",
    desc: "10011 FM 2920, Tomball, TX 77375 · 832.639.8310",
    link: "https://www.guestreservations.com/staybridge-suites-tomball-tomball/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=373113661&msclkid=32174e52ed27186292362778f03c3e4b",
    img: "https://images.getaroom-cdn.com/image/upload/s--HpWAqEYm--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1751622617/f96c420d8eb42377b42490acbca203ac9c219634?_a=BACAEuDL&atc=e7cd1cfa"
  },
  {
    category: "Tomball",
    title: "Hampton Inn & Suites",
    desc: "14100 Medical Complex Dr., Tomball, TX 77377 · 281.357.1500",
    link: "https://www.guestreservations.com/hampton-inn-and-suites-tomball/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=373114030&msclkid=bed6a2b5c1a41e9804eccb9fdcf2ae28",
    img: "https://images.getaroom-cdn.com/image/upload/s--fq0cWpiq--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1751646960/19f41335b0baee36c2548831055673299c89e707?_a=BACAEuDL&atc=e7cd1cfa"
  },
  {
    category: "Tomball",
    title: "Residence Inn (By Marriott)",
    desc: "14303 Medical Complex Dr., Tomball, TX 77377 · 832.955.1750",
    link: "https://www.reservationdesk.com/hotel/6912e46/residence-inn-by-marriott-san-marcos-san-marcos-texas/?cid=sem::TPRD::BA::Reservation%20Desk%20%3E%20Performance%20Max%20%3E%20Marriott::US%20%3E%20Texas%20%3E%20San%20Marcos%20%3E%20Residence%20Inn%20by%20Marriott%20San%20Marcos%20%3E%20did-6912e46%20%3E%20110177862::www.reservationdesk.com::b&creative=82669939461584&device=c&utm_source=bing&utm_medium=cpc&utm_term=www.reservationdesk.com&utm_campaign=Reservation%20Desk%20%3E%20Performance%20Max%20%3E%20Marriott&iv_=__iv_m_b_c_82669939461584_k_2334469345187086_w_kwd-2334469345187086:loc-190_g_1322715145779625_n_o_e__h_147906_ii_65819_p_2_b_bb_d_c_vi__&msclkid=84dc7c988a2016d21c5015b297a37d1a",
    img: "https://img.travelpass.com/hotel/6912e46/62281059/0/x700"
  },

  // -------- The Woodlands --------
  {
    category: "The Woodlands",
    title: "The Woodlands Waterway Marriott Hotel & Convention Center",
    desc: "1601 Lake Robbins Dr., The Woodlands, TX 77380 · 281.367.9797",
    link: "https://www.bing.com/search?q=The+Woodlands+Waterway+Marriott+Hotel+%26+Convention+Center+1601+Lake+Robbins+Dr.+The+Woodlands&cvid=7c9910ea94c041a6a702585d7065514a&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIHCAEQ6wcYQNIBBzgwOGowajmoAgiwAgE&FORM=ANAB01&PC=U531",
    img: "https://images.getaroom-cdn.com/image/upload/s--YWzSwW4v--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1755815278/8f49ad1fc0ab23700857792195a65354e0fd7b5a?_a=BACAEuDL&atc=e7cd1cfa"
  },
  {
    category: "The Woodlands",
    title: "The Woodlands Resort (By Hilton)",
    desc: "2301 N. Millbend Dr., The Woodlands, TX 77380 · 281.367.1100",
    link: "https://www.guestreservations.com/the-woodlands-resort-curio-collection-by-hilton/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=554520809&msclkid=ee9ccade0c9116aa42b8a3f4114c36a6",
    img: "https://images.getaroom-cdn.com/image/upload/s--QW77Y4GC--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1748544971/20acba38f90fe17d6eb6d261faa23ae342c79267?_a=BACAEuDL&atc=e7cd1cfa"
  },
  {
    category: "The Woodlands",
    title: "Hyatt Centric the Woodlands",
    desc: "9595 Six Pines, Suite 1100, The Woodlands, TX 77380 · 281.203.5005",
    link: "https://www.hyatt.com/hyatt-centric/hourw-hyatt-centric-the-woodlands/hotel-info",
    img: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2024/08/09/1135/HOURW-P0059-Exterior-Front-Facing-View.jpg/HOURW-P0059-Exterior-Front-Facing-View.16x9.jpg?imwidth=1920"
  },
  {
    category: "The Woodlands",
    title: "The Westin at the Woodlands",
    desc: "2 Waterway Square Place, The Woodlands, TX 77380 · 281.419.4300",
    link: "https://www.guestreservations.com/the-westin-at-the-woodlands-spring/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=431076851&msclkid=0ac86feca19c1bc4860806c6bff4ab9a",
    img: "https://images.getaroom-cdn.com/image/upload/s--VHZInHC6--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1751622696/21e37637ed59f40dbd25e8fac4be5c79d17c5aa0?_a=BACAEuDL&atc=e7cd1cfa"
  },
];

// Unique categories for filters
const categories = ["All", "Vintage Park", "Spring", "Tomball", "The Woodlands"];

// ------------------------------------------------------------------
// COMPONENT
// ------------------------------------------------------------------

const Enter = () => {
  const [filter, setFilter] = useState("All");

  const filteredHotels =
    filter === "All"
      ? allHotels
      : allHotels.filter((hotel) => hotel.category === filter);

  return (
    <div className="enter banda">
      <div className="enter_middle fade-in">
        <h2 className="timeline_title" id="where-to-stay">
          Hotel Accommodations
        </h2>

        <p className="enter_p width_cut">
          Here are all recommended hotel accommodations nearby. Use the filter
          below to browse by area.
        </p>
        <br />
        <br />
        {/* FILTER BUTTONS */}
        <div className="filter_buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter_btn ${filter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* CUSTOM SWIPER NAV BUTTONS */}
        <div className="swiper_nav_wrapper">
          <button className="swiper_prev">
            <ChevronLeft size={22} />
          </button>
          <button className="swiper_next">
            <ChevronRight size={22} />
          </button>
        </div>
        <br />
        {/* SWIPER */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1.5 }, // small phones
            640: { slidesPerView: 2 },   // phones landscape / small tablets
            768: { slidesPerView: 2.2 }, // medium tablets
            1024: { slidesPerView: 3 },  // laptops
            1280: { slidesPerView: 3 }, // big screens
          }}
        >
          {filteredHotels.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="enter_subs fade-in">
                <img
                  src={item.img}
                  className="enter_band_img"
                  alt={item.title}
                  loading="lazy"
                />

                <h2 className="band_name">{item.title}</h2>

                <button className="view">
                  <a href={item.link} target="_blank" className="website_link">
                    Website Link
                  </a>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default Enter;
