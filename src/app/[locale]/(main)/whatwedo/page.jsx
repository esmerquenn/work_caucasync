"use client";
import React from "react";
import { motion } from "framer-motion";
import {  Users, CheckCircle, TrendingUp, FileText, Handshake, Target, Award } from "lucide-react";

import HeaderPages from "@/components/ui/headerPages/HeaderPages";

function page() {
    const whatWeDo = [
    {
      icon: Handshake,
      title: "Beynəlxalq Ticarət Vasitəçiliyi",
      description: "Caucasync olaraq, müxtəlif ölkələr arasında ticarət körpüsü yaradırıq. Tədarükçülər və alıcılar arasında etibarlı vasitəçi kimi çıxış edərək, hər iki tərəfin mənafelərini qoruyuruq. 50-dən çox ölkə ilə əməkdaşlıq edərək, müştərilərimizə ən sərfəli və keyfiyyətli məhsulları təqdim edirik.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FileText,
      title: "Tender İştirakı və İdarəetməsi",
      description: "Dövlət və özəl sektor tenderlərində peşəkar iştirak təmin edirik. Tender sənədlərinin hazırlanmasından tutmuş qazanılmasına qədər bütün prosesi idarə edirik. Texniki və kommersial təkliflərin hazırlanması, qiymətləndirmə və danışıqlar mərhələsində tam dəstək göstəririk.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: TrendingUp,
      title: "Logistika və Tədarük Zənciri",
      description: "Məhsulların mənbədən son nöqtəyə çatdırılması üçün kompleks logistika həlləri təklif edirik. Gömrük rəsmiləşdirilməsi, nəqliyyat, anbar idarəetməsi və çatdırılma xidmətlərimizlə tədarük zəncirinizi optimize edirik. Vaxtında və təhlükəsiz çatdırılma zəmanəti veririk.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Müştəri Məmnuniyyəti və Dəstək",
      description: "98% müştəri məmnuniyyəti göstəricisi ilə fəxr edirik. Hər müştəriyə fərdi yanaşma tətbiq edərək, onların xüsusi tələblərini qarşılayırıq. 7/24 müştəri dəstəyi və satış sonrası xidmətlərimizlə daim yanınızdayıq. Uzunmüddətli əməkdaşlıq qurmaq bizim əsas prioritetimizdir.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const howWeWork = [
    {
      step: "01",
      title: "Təhlil və Planlaşdırma",
      description: "Müştərinin ehtiyaclarını dəqiq müəyyənləşdirir, bazar araşdırması aparır və optimal həll strategiyası hazırlayırıq.",
      icon: Target,
    },
    {
      step: "02",
      title: "Tərəfdaş Seçimi",
      description: "Geniş tərəfdaş şəbəkəmizdən ən uyğun tədarükçü və ya alıcıları seçir, keyfiyyət və qiymət baxımından ən yaxşı variantı təqdim edirik.",
      icon: Handshake,
    },
    {
      step: "03",
      title: "Danışıq və Müqavilə",
      description: "Peşəkar danışıqçılarımız hər iki tərəfin razılığını təmin edərək, şəffaf və ədalətli müqavilələr bağlayırıq.",
      icon: FileText,
    },
    {
      step: "04",
      title: "İcra və Nəzarət",
      description: "Prosesi başdan sona nəzarətdə saxlayır, keyfiyyət standartlarına riayət olunmasını təmin edir və müştərini məlumatlandırırıq.",
      icon: CheckCircle,
    },
    {
      step: "05",
      title: "Çatdırılma və Qiymətləndirmə",
      description: "Məhsulların vaxtında və təhlükəsiz çatdırılmasını təmin edir, prosesi qiymətləndirir və gələcək əməkdaşlıq üçün əlaqəni davam etdiririk.",
      icon: Award,
    },
  ];
  return (
    <div className="py-10 bg-main">
      {/* <HeaderPages
        image="bg-image-about"
        title="What we do"
        text="We’ve prepared a few case studies from a selection of our clients to provide you with insight into the value ITA are capable of unlocking."
      /> */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* What We Do Section */}
        <section className="relative py-10 lg:py-12 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex justify-center mb-5 text-emerald-600">
                <span className="flex gap-3 items-center">
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.67129 3.14634C4.47603 3.34161 4.47603 3.65819 4.67129 3.85345L7.14616 6.32833C7.34142 6.52359 7.65801 6.52359 7.85327 6.32833L10.3281 3.85345C10.5234 3.65819 10.5234 3.34161 10.3281 3.14634L7.85327 0.671471C7.65801 0.476209 7.34142 0.476209 7.14616 0.671471L4.67129 3.14634ZM7.49971 5.26766L5.73195 3.4999L7.49971 1.73213L9.26748 3.4999L7.49971 5.26766ZM8.67129 7.14634C8.47603 7.34161 8.47603 7.65819 8.67129 7.85345L11.1462 10.3283C11.3414 10.5236 11.658 10.5236 11.8533 10.3283L14.3281 7.85345C14.5234 7.65819 14.5234 7.34161 14.3281 7.14634L11.8533 4.67147C11.658 4.47621 11.3414 4.47621 11.1462 4.67147L8.67129 7.14634ZM11.4997 9.26766L9.73195 7.4999L11.4997 5.73213L13.2675 7.4999L11.4997 9.26766ZM4.67129 11.8535C4.47603 11.6582 4.47603 11.3416 4.67129 11.1463L7.14616 8.67147C7.34142 8.47621 7.65801 8.47621 7.85327 8.67147L10.3281 11.1463C10.5234 11.3416 10.5234 11.6582 10.3281 11.8535L7.85327 14.3283C7.65801 14.5236 7.34142 14.5236 7.14616 14.3283L4.67129 11.8535ZM5.73195 11.4999L7.49971 13.2677L9.26748 11.4999L7.49971 9.73213L5.73195 11.4999ZM0.671288 7.14649C0.476026 7.34175 0.476026 7.65834 0.671288 7.8536L3.14616 10.3285C3.34142 10.5237 3.65801 10.5237 3.85327 10.3285L6.32814 7.8536C6.5234 7.65834 6.5234 7.34175 6.32814 7.14649L3.85327 4.67162C3.65801 4.47636 3.34142 4.47636 3.14616 4.67162L0.671288 7.14649ZM3.49972 9.26781L1.73195 7.50005L3.49972 5.73228L5.26748 7.50005L3.49972 9.26781Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <h5 className="text-xl font-bold">Xidmətlərimiz</h5>
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Nə İş Görürük</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Caucasync olaraq beynəlxalq ticarətdə peşəkar həllər təqdim edir, müştərilərimizin uğuruna töhfə veririk
              </p>
            </motion.div>

            {/* What We Do Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {whatWeDo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex justify-center mb-5 text-emerald-600">
                <span className="flex gap-3 items-center">
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.67129 3.14634C4.47603 3.34161 4.47603 3.65819 4.67129 3.85345L7.14616 6.32833C7.34142 6.52359 7.65801 6.52359 7.85327 6.32833L10.3281 3.85345C10.5234 3.65819 10.5234 3.34161 10.3281 3.14634L7.85327 0.671471C7.65801 0.476209 7.34142 0.476209 7.14616 0.671471L4.67129 3.14634ZM7.49971 5.26766L5.73195 3.4999L7.49971 1.73213L9.26748 3.4999L7.49971 5.26766ZM8.67129 7.14634C8.47603 7.34161 8.47603 7.65819 8.67129 7.85345L11.1462 10.3283C11.3414 10.5236 11.658 10.5236 11.8533 10.3283L14.3281 7.85345C14.5234 7.65819 14.5234 7.34161 14.3281 7.14634L11.8533 4.67147C11.658 4.47621 11.3414 4.47621 11.1462 4.67147L8.67129 7.14634ZM11.4997 9.26766L9.73195 7.4999L11.4997 5.73213L13.2675 7.4999L11.4997 9.26766ZM4.67129 11.8535C4.47603 11.6582 4.47603 11.3416 4.67129 11.1463L7.14616 8.67147C7.34142 8.47621 7.65801 8.47621 7.85327 8.67147L10.3281 11.1463C10.5234 11.3416 10.5234 11.6582 10.3281 11.8535L7.85327 14.3283C7.65801 14.5236 7.34142 14.5236 7.14616 14.3283L4.67129 11.8535ZM5.73195 11.4999L7.49971 13.2677L9.26748 11.4999L7.49971 9.73213L5.73195 11.4999ZM0.671288 7.14649C0.476026 7.34175 0.476026 7.65834 0.671288 7.8536L3.14616 10.3285C3.34142 10.5237 3.65801 10.5237 3.85327 10.3285L6.32814 7.8536C6.5234 7.65834 6.5234 7.34175 6.32814 7.14649L3.85327 4.67162C3.65801 4.47636 3.34142 4.47636 3.14616 4.67162L0.671288 7.14649ZM3.49972 9.26781L1.73195 7.50005L3.49972 5.73228L5.26748 7.50005L3.49972 9.26781Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <h5 className="text-xl font-bold">İş Prinsipimiz</h5>
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Necə İşləyirik</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">5 addımda peşəkar və şəffaf iş prosesi</p>
            </motion.div>

            {/* Process Steps */}
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {howWeWork.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      {/* Step number circle */}
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full flex items-center justify-center shadow-lg relative z-10">
                          <span className="text-2xl font-bold text-white">{step.step}</span>
                        </div>
                      </div>

                      {/* Card */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </div>
    </div>
  );
}

export default page;

