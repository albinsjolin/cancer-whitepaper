import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";

const langCodes = [
  {
    code: "ar",
    text: "عربي",
  },
  {
    code: "de",
    text: "Deutsch",
  },
  {
    code: "en",
    text: "English",
  },
  {
    code: "es",
    text: "Español",
  },
  {
    code: "fr",
    text: "Français",
  },
  {
    code: "hi",
    text: "हिन्दी",
  },
  {
    code: "it",
    text: "Italiano",
  },
  {
    code: "sv",
    text: "Svenska",
  },
  {
    code: "zh",
    text: "中文",
  },
];

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["index"])),
    },
  };
}

export default function Index() {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <main>
      <Head>
        <title>{t("index:seo_title")}</title>
        <meta name="description" content={t("index:seo_desc")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        {langCodes.map(({ code, text }, i) => (
          <>
            <a
              href={`/${code}`}
              className={`${locale === code ? "highlight" : "gray"}`}
            >
              {text}
            </a>
            {i !== langCodes.length - 1 && <span className="divider">/</span>}
          </>
        ))}
      </nav>

      <h1>{t("index:title")}</h1>
      <p className="italic">{t("index:intro")}</p>
      <a
        href="https://github.com/albinsjolin/cancer.com.ai"
        target="_blank"
        rel="noreferrer"
      >
        {t("index:contribute")}
      </a>

      <h2>{t("index:t1")}</h2>
      <p>{t("index:p1")}</p>

      <h2>{t("index:t2")}</h2>
      <h3>{t("index:t3")}</h3>

      <p>{t("index:p2")}</p>
      <p>{t("index:p56")}</p>
      <p>{t("index:p3")}</p>
      <p>{t("index:p4")}</p>
      <h3>{t("index:t4")}</h3>

      <p>{t("index:p5")}</p>
      <p>{t("index:p6")}</p>
      <p>{t("index:p7")}</p>
      <p>{t("index:p8")}</p>
      <p>{t("index:p9")}</p>
      <p>{t("index:p10")}</p>

      <h3>{t("index:t5")}</h3>
      <p>{t("index:p11")}</p>

      <h3>{t("index:t6")}</h3>
      <p>{t("index:p12")}</p>
      <p>{t("index:p13")}</p>

      <h3>{t("index:t7")}</h3>
      <p>{t("index:p14")}</p>
      <p>{t("index:p15")}</p>

      <h3>{t("index:t8")}</h3>
      <p>{t("index:p16")}</p>
      <p>{t("index:p17")}</p>

      <h3>{t("index:t9")}</h3>
      <p>{t("index:p18")}</p>
      <p>{t("index:p19")}</p>
      <p>{t("index:p20")}</p>
      <p>{t("index:p21")}</p>
      <p>{t("index:p22")}</p>

      <h3>{t("index:t10")}</h3>
      <p>{t("index:p23")}</p>

      <h2>{t("index:t11")}</h2>
      <h3>{t("index:t13")}</h3>
      <p>{t("index:p25")}</p>
      <p>{t("index:p26")}</p>
      <p>{t("index:p27")}</p>
      <p>{t("index:p28")}</p>
      <p>{t("index:p57")}</p>

      <h3>{t("index:t14")}</h3>
      <p>{t("index:p29")}</p>
      <p>{t("index:p30")}</p>
      <p>{t("index:p31")}</p>

      <h3>{t("index:t15")}</h3>
      <p>{t("index:p32")}</p>
      <p>{t("index:p33")}</p>

      <h3>{t("index:t16")}</h3>
      <p>{t("index:p34")}</p>
      <p>{t("index:p35")}</p>
      <p>{t("index:p36")}</p>
      <p>{t("index:p37")}</p>

      <h3>{t("index:t17")}</h3>
      <p>{t("index:p38")}</p>
      <p>{t("index:p39")}</p>
      <p>{t("index:p40")}</p>
      <p>{t("index:p41")}</p>

      <h3>{t("index:t18")}</h3>
      <p>{t("index:p42")}</p>

      <h3>{t("index:t19")}</h3>
      <p>{t("index:p43")}</p>

      <h3>{t("index:t20")}</h3>
      <p>{t("index:p44")}</p>
      <p>{t("index:p45")}</p>

      <h3>{t("index:t21")}</h3>
      <p>{t("index:p46")}</p>

      <h3>{t("index:t22")}</h3>
      <p>{t("index:p47")}</p>
      <p>{t("index:p48")}</p>

      <h3>{t("index:t23")}</h3>
      <p>{t("index:p49")}</p>

      <h3>{t("index:t24")}</h3>
      <p>{t("index:p50")}</p>

      <h3>{t("index:t25")}</h3>
      <p>{t("index:p51")}</p>
      <p>{t("index:p52")}</p>
      <p>{t("index:p53")}</p>

      <h2>{t("index:t26")}</h2>
      <p>{t("index:p54")}</p>
      <p>{t("index:p55")}</p>

      <h2>{t("index:t27")}</h2>
      <table>
        <tbody>
          <tr>
            <td>{t("index:ta1")}</td>
            <td>{t("index:tt1")}</td>
            <td className="flex">
              <span>{t("index:tp1")}</span>
              <a
                href="https://www.alimentarium.org/en/knowledge/voluntary-fasting"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj1")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta2")}</td>
            <td>{t("index:tt2")}</td>
            <td className="flex">
              <span>{t("index:tp2")}</span>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/27693581/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj2")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta3")}</td>
            <td>{t("index:tt3")}</td>
            <td className="flex">
              <span>{t("index:tp3")}</span>
              <a
                href="https://www.hindawi.com/journals/jnme/2020/3642035/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj3")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta4")}</td>
            <td>{t("index:tt4")}</td>
            <td className="flex">
              <span>{t("index:tp4")}</span>
              <a
                href="https://www.youtube.com/watch?v=tJICCFZLgHY&amp;ab_channel=LowCarbDownUnder"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta5")}</td>
            <td>{t("index:tt5")}</td>
            <td className="flex">
              <span>{t("index:tp5")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4454940/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta6")}</td>
            <td>{t("index:tt6")}</td>
            <td className="flex">
              <span>{t("index:tp6")}</span>
              <a
                href="https://www.youtube.com/watch?v=KGFUPSdATuw&amp;ab_channel=Dr.Boz%5BAnnetteBosworth%2CMD%5D"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta7")}</td>
            <td>{t("index:tt7")}</td>
            <td className="flex">
              <span>{t("index:tp7")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2671032/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta8")}</td>
            <td>{t("index:tt8")}</td>
            <td className="flex">
              <span>{t("index:tp8")}</span>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/26094889/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj2")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta9")}</td>
            <td>{t("index:tt9")}</td>
            <td className="flex">
              <span>{t("index:tp9")}</span>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/28925405/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj2")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta10")}</td>
            <td>{t("index:tt10")}</td>
            <td className="flex">
              <span>{t("index:tp10")}</span>
              <a
                href="https://www.cdc.gov/diabetes/basics/what-is-type-1-diabetes.html"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj10")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta11")}</td>
            <td>{t("index:tt11")}</td>
            <td className="flex">
              <span>{t("index:tp11")}</span>
              <a
                href="https://www.mdpi.com/2072-6643/11/12/3016/htm"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj6")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta12")}</td>
            <td>{t("index:tt12")}</td>
            <td className="flex">
              <span>{t("index:tp12")}</span>
              <a
                href="https://www.cancer.org.au/cancer-information/types-of-cancer/skin-cancer"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj7")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta13")}</td>
            <td>{t("index:tt13")}</td>
            <td className="flex">
              <span>{t("index:tp13")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK482457/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta14")}</td>
            <td>{t("index:tt14")}</td>
            <td className="flex">
              <span>{t("index:tp14")}</span>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/24905167/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj2")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta15")}</td>
            <td>{t("index:tt15")}</td>
            <td className="flex">
              <span>{t("index:tp15")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7284700/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta16")}</td>
            <td>{t("index:tt16")}</td>
            <td className="flex">
              <span>{t("index:tp16")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6950580/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta17")}</td>
            <td>{t("index:tt17")}</td>
            <td className="flex">
              <span>{t("index:tp17")}</span>
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S0090429500009389"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj9")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta18")}</td>
            <td>{t("index:tt18")}</td>
            <td className="flex">
              <span>{t("index:tp18")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4209489/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta19")}</td>
            <td>{t("index:tt19")}</td>
            <td className="flex">
              <span>{t("index:tp19")}</span>
              <a
                href="https://www.youtube.com/watch?v=3fM9o72ykww&amp;ab_channel=TEDxTalks"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>
          <tr>
            <td>{t("index:ta20")}</td>
            <td>{t("index:tt20")}</td>
            <td className="flex">
              <span>{t("index:tp20")}</span>
              <a
                href="https://www.youtube.com/watch?v=kcrdpuSvHmE&amp;ab_channel=Keto-Mojo"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta21")}</td>
            <td>{t("index:tt21")}</td>
            <td className="flex">
              <span>{t("index:tp21")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1369270/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta22")}</td>
            <td>{t("index:tt22")}</td>
            <td className="flex">
              <span>{t("index:tp22")}</span>
              <a
                href="https://academic.oup.com/ajcn/article/113/6/1565/6178918?login=false"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj11")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta23")}</td>
            <td>{t("index:tt23")}</td>
            <td className="flex">
              <span>{t("index:tp23")}</span>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/26853923/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj2")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta24")}</td>
            <td>{t("index:tt24")}</td>
            <td className="flex">
              <span>{t("index:tp24")}</span>
              <a
                href="https://www.youtube.com/watch?v=NW0-m0x1sZ8&amp;ab_channel=Dr.StenEkberg"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta25")}</td>
            <td>{t("index:tt25")}</td>
            <td className="flex">
              <span>{t("index:tp25")}</span>
              <a
                href="https://www.youtube.com/watch?v=SLFsbQNzqv0&amp;ab_channel=Dr.StenEkberg"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta26")}</td>
            <td>{t("index:tt26")}</td>
            <td className="flex">
              <span>{t("index:tp26")}</span>
              <a
                href="https://www.wcrf.org/dietandcancer/cancer-trends/comparing-more-and-less-developed-countries"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj12")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta75")}</td>
            <td>{t("index:tt75")}</td>
            <td className="flex">
              <span>{t("index:tp75")}</span>
              <a
                href="https://www.youtube.com/watch?v=lmbY-GrM8pI&amp;t=1s&amp;ab_channel=FallofCivilizations"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta27")}</td>
            <td>{t("index:tt27")}</td>
            <td className="flex">
              <span>{t("index:tp27")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5530187/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta28")}</td>
            <td>{t("index:tt28")}</td>
            <td className="flex">
              <span>{t("index:tp28")}</span>
              <a
                href="https://www.everydayhealth.com/type-2-diabetes/high-and-low-blood-sugar/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj13")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta29")}</td>
            <td>{t("index:tt29")}</td>
            <td className="flex">
              <span>{t("index:tp29")}</span>
              <a
                href="https://www.youtube.com/watch?v=tIuj-oMN-Fk&amp;ab_channel=LowCarbDownUnder"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta30")}</td>
            <td>{t("index:tt30")}</td>
            <td className="flex">
              <span>{t("index:tp30")}</span>
              <a
                href="https://www.youtube.com/watch?v=x91vpkXCmH8&amp;ab_channel=Lakanto"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta31")}</td>
            <td>{t("index:tt31")}</td>
            <td className="flex">
              <span>{t("index:tp31")}</span>
              <a
                href="https://onlinelibrary.wiley.com/doi/full/10.1111/exd.14072"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj14")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta32")}</td>
            <td>{t("index:tt32")}</td>
            <td className="flex">
              <span>{t("index:tp32")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5605648/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta33")}</td>
            <td>{t("index:tt33")}</td>
            <td className="flex">
              <span>{t("index:tp33")}</span>
              <a
                href="https://www.sciencedirect.com/science/article/pii/S0278691520305913?via%3Dihub"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj9")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta34")}</td>
            <td>{t("index:tt34")}</td>
            <td className="flex">
              <span>{t("index:tp34")}</span>
              <a
                href="https://www.youtube.com/watch?v=DlI6DMZxgBY&amp;ab_channel=LowCarbDownUnder"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta35")}</td>
            <td>{t("index:tt35")}</td>
            <td className="flex">
              <span>{t("index:tp35")}</span>
              <a
                href="https://onlinelibrary.wiley.com/doi/full/10.1002/fsn3.1809"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj14")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta36")}</td>
            <td>{t("index:tt36")}</td>
            <td className="flex">
              <span>{t("index:tp36")}</span>
              <a
                href="https://www.drhungmd.com/blog/4-ways-you-can-get-skin-cancer-besides-sunlight/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj15")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta37")}</td>
            <td>{t("index:tt37")}</td>
            <td className="flex">
              <span>{t("index:tp37")}</span>
              <a
                href="https://www.sciencedirect.com/science/article/pii/S2211124719309246"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj9")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta38")}</td>
            <td>{t("index:tt38")}</td>
            <td className="flex">
              <span>{t("index:tp38")}</span>
              <a
                href="https://www.nytimes.com/2010/12/28/health/28cancer.html"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj16")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta39")}</td>
            <td>{t("index:tt39")}</td>
            <td className="flex">
              <span>{t("index:tp39")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7379157/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta40")}</td>
            <td>{t("index:tt40")}</td>
            <td className="flex">
              <span>{t("index:tp40")}</span>
              <a
                href="https://www.nature.com/articles/6602627"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj17")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta41")}</td>
            <td>{t("index:tt41")}</td>
            <td className="flex">
              <span>{t("index:tp41")}</span>
              <a
                href="https://translational-medicine.biomedcentral.com/articles/10.1186/s12967-021-03122-8"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj18")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta42")}</td>
            <td>{t("index:tt42")}</td>
            <td className="flex">
              <span>{t("index:tp42")}</span>
              <a
                href="https://academic.oup.com/cdn/article/5/12/nzab133/6415894"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj19")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta43")}</td>
            <td>{t("index:tt43")}</td>
            <td className="flex">
              <span>{t("index:tp43")}</span>
              <a
                href="https://www.youtube.com/watch?v=OjkzfeJz66o&amp;ab_channel=TED-Ed"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta44")}</td>
            <td>{t("index:tt44")}</td>
            <td className="flex">
              <span>{t("index:tp44")}</span>
              <a
                href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0113919"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj20")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta45")}</td>
            <td>{t("index:tt45")}</td>
            <td className="flex">
              <span>{t("index:tp45")}</span>
              <a
                href="https://www.youtube.com/watch?v=dVArDzYynYc&amp;ab_channel=TEDxTalks"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta46")}</td>
            <td>{t("index:tt46")}</td>
            <td className="flex">
              <span>{t("index:tp46")}</span>
              <a
                href="https://www.youtube.com/watch?v=f6rSuJ2YheQ&amp;ab_channel=TEDxTalks"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta47")}</td>
            <td>{t("index:tt47")}</td>
            <td className="flex">
              <span>{t("index:tp47")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5668137/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta48")}</td>
            <td>{t("index:tt48")}</td>
            <td className="flex">
              <span>{t("index:tp48")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5842175/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta49")}</td>
            <td>{t("index:tt49")}</td>
            <td className="flex">
              <span>{t("index:tp49")}</span>
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S2211912421000572?via%3Dihub"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj9")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta50")}</td>
            <td>{t("index:tt50")}</td>
            <td className="flex">
              <span>{t("index:tp50")}</span>
              <a
                href="https://sajs.co.za/article/view/3566"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj21")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta51")}</td>
            <td>{t("index:tt51")}</td>
            <td className="flex">
              <span>{t("index:tp51")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5442682/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta52")}</td>
            <td>{t("index:tt52")}</td>
            <td className="flex">
              <span>{t("index:tp52")}</span>
              <a
                href="http://www.greekmedicine.net/hygiene/Fasting_and_Purification.html"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj22")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta53")}</td>
            <td>{t("index:tt53")}</td>
            <td className="flex">
              <span>{t("index:tp53")}</span>
              <a
                href="https://www.youtube.com/watch?v=0ka9WBEijhk"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta54")}</td>
            <td>{t("index:tt54")}</td>
            <td className="flex">
              <span>{t("index:tp54")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4235292/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta55")}</td>
            <td>{t("index:tt55")}</td>
            <td className="flex">
              <span>{t("index:tp55")}</span>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/17988334/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj2")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta56")}</td>
            <td>{t("index:tt56")}</td>
            <td className="flex">
              <span>{t("index:tp56")}</span>
              <a
                href="https://ourworldindata.org/cancer"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj23")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta57")}</td>
            <td>{t("index:tt57")}</td>
            <td className="flex">
              <span>{t("index:tp57")}</span>
              <a
                href="https://www.youtube.com/watch?v=CsPSJ-dXqks&amp;ab_channel=LowCarbDownUnder"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta58")}</td>
            <td>{t("index:tt58")}</td>
            <td className="flex">
              <span>{t("index:tp58")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5466513/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta59")}</td>
            <td>{t("index:tt59")}</td>
            <td className="flex">
              <span>{t("index:tp59")}</span>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/17918181/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj2")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta60")}</td>
            <td>{t("index:tt60")}</td>
            <td className="flex">
              <span>{t("index:tp60")}</span>
              <a
                href="https://academic.oup.com/ajcn/article/76/6/1308/4689578"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj11")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta61")}</td>
            <td>{t("index:tt61")}</td>
            <td className="flex">
              <span>{t("index:tp61")}</span>
              <a
                href="https://www.youtube.com/watch?v=9nXop2lLDa4&amp;ab_channel=TalksatGoogle"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta62")}</td>
            <td>{t("index:tt62")}</td>
            <td className="flex">
              <span>{t("index:tp62")}</span>
              <a
                href="https://aacrjournals.org/cancerres/article/9/12/724/649210/The-Influence-of-the-Degree-of-Caloric-Restriction"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj24")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta63")}</td>
            <td>{t("index:tt63")}</td>
            <td className="flex">
              <span>{t("index:tp63")}</span>
              <a
                href="https://www.pnas.org/content/118/7/e2003926118"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj25")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta64")}</td>
            <td>{t("index:tt64")}</td>
            <td className="flex">
              <span>{t("index:tp64")}</span>
              <a
                href="https://josephtramazzo.medium.com/autophagy-fasting-part-2-how-to-trigger-maximize-autophagy-78a137b787b7"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj26")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta65")}</td>
            <td>{t("index:tt65")}</td>
            <td className="flex">
              <span>{t("index:tp65")}</span>
              <a
                href="https://www.karger.com/Article/FullText/441266"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj27")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta66")}</td>
            <td>{t("index:tt66")}</td>
            <td className="flex">
              <span>{t("index:tp66")}</span>
              <a
                href="https://academic.oup.com/jn/article/147/4/612/4630425"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj28")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta67")}</td>
            <td>{t("index:tt67")}</td>
            <td className="flex">
              <span>{t("index:tp67")}</span>
              <a
                href="https://en.wikipedia.org/wiki/Autophagy"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj29")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta68")}</td>
            <td>{t("index:tt68")}</td>
            <td className="flex">
              <span>{t("index:tp68")}</span>
              <a
                href="https://en.wikipedia.org/wiki/Fasting#Christianity"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj29")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta69")}</td>
            <td>{t("index:tt69")}</td>
            <td className="flex">
              <span>{t("index:tp69")}</span>
              <a
                href="https://en.wikipedia.org/wiki/Paleolithic"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj29")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta70")}</td>
            <td>{t("index:tt70")}</td>
            <td className="flex">
              <span>{t("index:tp70")}</span>
              <a
                href="https://en.wikipedia.org/wiki/Shanidar_Cave"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj29")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta71")}</td>
            <td>{t("index:tt71")}</td>
            <td className="flex">
              <span>{t("index:tp71")}</span>
              <a
                href="https://www.youtube.com/watch?v=pcXbruZcT_Q"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj4")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta72")}</td>
            <td>{t("index:tt72")}</td>
            <td className="flex">
              <span>{t("index:tp72")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4470583/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta73")}</td>
            <td>{t("index:tt73")}</td>
            <td className="flex">
              <span>{t("index:tp73")}</span>
              <a
                href="https://www.cell.com/cell-metabolism/fulltext/S1550-4131(16)30643-X?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS155041311630643X%3Fshowall%3Dtrue"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj30")}
              </a>
            </td>
          </tr>

          <tr>
            <td>{t("index:ta74")}</td>
            <td>{t("index:tt74")}</td>
            <td className="flex">
              <span>{t("index:tp74")}</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5325395/"
                target="_blank"
                rel="noreferrer"
              >
                {t("index:tj5")}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
