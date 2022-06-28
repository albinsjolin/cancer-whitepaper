import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['index']))
    }
  }
}

export default function Index() {
  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>{t('index:seo_title')}</title>
        <meta name="description" content={t('index:seo_desc')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{t('index:title')}</h1>
      <p>{t('index:intro')}</p>

      <h2>{t('index:t1')}</h2>
      <p>{t('index:p1')}</p>

      <h2>{t('index:t2')}</h2>
      <h3>{t('index:t3')}</h3>

      <p>{t('index:p2')}</p>
      <p>{t('index:p56')}</p>
      <p>{t('index:p3')}</p>
      <p>{t('index:p4')}</p>
      <h3>{t('index:t4')}</h3>

      <p>{t('index:p5')}</p>
      <p>{t('index:p6')}</p>
      <p>{t('index:p7')}</p>
      <p>{t('index:p8')}</p>
      <p>{t('index:p9')}</p>
      <p>{t('index:p10')}</p>

      <h3>{t('index:t5')}</h3>
      <p>{t('index:p11')}</p>

      <h3>{t('index:t6')}</h3>
      <p>{t('index:p12')}</p>
      <p>{t('index:p13')}</p>

      <h3>{t('index:t7')}</h3>
      <p>{t('index:p14')}</p>
      <p>{t('index:p15')}</p>

      <h3>{t('index:t8')}</h3>
      <p>{t('index:p16')}</p>
      <p>{t('index:p17')}</p>

      <h3>{t('index:t9')}</h3>
      <p>{t('index:p18')}</p>
      <p>{t('index:p19')}</p>
      <p>{t('index:p20')}</p>
      <p>{t('index:p21')}</p>
      <p>{t('index:p22')}</p>

      <h3>{t('index:t10')}</h3>
      <p>{t('index:p23')}</p>

      <h2>{t('index:t11')}</h2>
      <h3>{t('index:t12')}</h3>
      <p>{t('index:p24')}</p>

      <h3>{t('index:t13')}</h3>
      <p>{t('index:p25')}</p>
      <p>{t('index:p26')}</p>
      <p>{t('index:p27')}</p>
      <p>{t('index:p28')}</p>
      <p>{t('index:p57')}</p>

      <h3>{t('index:t14')}</h3>
      <p>{t('index:p29')}</p>
      <p>{t('index:p30')}</p>
      <p>{t('index:p31')}</p>

      <h3>{t('index:t15')}</h3>
      <p>{t('index:p32')}</p>
      <p>{t('index:p33')}</p>

      <h3>{t('index:t16')}</h3>
      <p>{t('index:p34')}</p>
      <p>{t('index:p35')}</p>
      <p>{t('index:p36')}</p>
      <p>{t('index:p37')}</p>

      <h3>{t('index:t17')}</h3>
      <p>{t('index:p38')}</p>
      <p>{t('index:p39')}</p>
      <p>{t('index:p40')}</p>
      <p>{t('index:p41')}</p>

      <h3>{t('index:t18')}</h3>
      <p>{t('index:p42')}</p>

      <h3>{t('index:t19')}</h3>
      <p>{t('index:p43')}</p>

      <h3>{t('index:t20')}</h3>
      <p>{t('index:p44')}</p>
      <p>{t('index:p45')}</p>

      <h3>{t('index:t21')}</h3>
      <p>{t('index:p46')}</p>

      <h3>{t('index:t22')}</h3>
      <p>{t('index:p47')}</p>
      <p>{t('index:p48')}</p>

      <h3>{t('index:t23')}</h3>
      <p>{t('index:p49')}</p>

      <h3>{t('index:t24')}</h3>
      <p>{t('index:p50')}</p>

      <h3>{t('index:t25')}</h3>
      <p>{t('index:p51')}</p>
      <p>{t('index:p52')}</p>
      <p>{t('index:p53')}</p>

      <h2>{t('index:t26')}</h2>
      <p>{t('index:p54')}</p>
      <p>{t('index:p55')}</p>

      <h2>{t('index:t27')}</h2>
      <table>
        <thead>
          <tr>
            <th>{t('index:th_title')}</th>
            <th>{t('index:th_authors')}</th>
            <th>{t('index:th_published')}</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <a href="https://www.alimentarium.org/en/knowledge/voluntary-fasting" rel="nofollow">{t('index:tt1')}</a>
            </td>
            <td>{t('index:ta1')}</td>
            <td>{t('index:tp1')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://pubmed.ncbi.nlm.nih.gov/27693581/" rel="nofollow">{t('index:tt2')}</a>
            </td>
            <td>{t('index:ta2')}</td>
            <td>{t('index:tp2')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.hindawi.com/journals/jnme/2020/3642035/" rel="nofollow">{t('index:tt3')}</a>
            </td>
            <td>{t('index:ta3')}</td>
            <td>{t('index:tp3')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=tJICCFZLgHY&amp;ab_channel=LowCarbDownUnder" rel="nofollow">{t('index:tt4')}</a>
            </td>
            <td>{t('index:ta4')}</td>
            <td>{t('index:tp4')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4454940/" rel="nofollow">{t('index:tt5')}</a>
            </td>
            <td>{t('index:ta5')}</td>
            <td>{t('index:tp5')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=KGFUPSdATuw&amp;ab_channel=Dr.Boz%5BAnnetteBosworth%2CMD%5D" rel="nofollow">{t('index:tt6')}</a>
            </td>
            <td>{t('index:ta6')}</td>
            <td>{t('index:tp6')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2671032/" rel="nofollow">{t('index:tt7')}</a>
            </td>
            <td>{t('index:ta7')}</td>
            <td>{t('index:tp7')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://pubmed.ncbi.nlm.nih.gov/26094889/" rel="nofollow">{t('index:tt8')}</a>
            </td>
            <td>{t('index:ta8')}</td>
            <td>{t('index:tp8')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://pubmed.ncbi.nlm.nih.gov/28925405/" rel="nofollow">{t('index:tt9')}</a>
            </td>
            <td>{t('index:ta9')}</td>
            <td>{t('index:tp9')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.cdc.gov/diabetes/basics/what-is-type-1-diabetes.html" rel="nofollow">{t('index:tt10')}</a>
            </td>
            <td>{t('index:ta10')}</td>
            <td>{t('index:tp10')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.mdpi.com/2072-6643/11/12/3016/htm" rel="nofollow">{t('index:tt11')}</a>
            </td>
            <td>{t('index:ta11')}</td>
            <td>{t('index:tp11')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.cancer.org.au/cancer-information/types-of-cancer/skin-cancer" rel="nofollow">{t('index:tt12')}</a>
            </td>
            <td>{t('index:ta12')}</td>
            <td>{t('index:tp12')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/books/NBK482457/" rel="nofollow">{t('index:tt13')}</a>
            </td>
            <td>{t('index:ta13')}</td>
            <td>{t('index:tp13')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://pubmed.ncbi.nlm.nih.gov/24905167/" rel="nofollow">{t('index:tt14')}</a>
            </td>
            <td>{t('index:ta14')}</td>
            <td>{t('index:tp14')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7284700/" rel="nofollow">{t('index:tt15')}</a>
            </td>
            <td>{t('index:ta15')}</td>
            <td>{t('index:tp15')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6950580/" rel="nofollow">{t('index:tt16')}</a>
            </td>
            <td>{t('index:ta16')}</td>
            <td>{t('index:tp16')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0090429500009389" rel="nofollow">{t('index:tt17')}</a>
            </td>
            <td>{t('index:ta17')}</td>
            <td>{t('index:tp17')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4209489/" rel="nofollow">{t('index:tt18')}</a>
            </td>
            <td>{t('index:ta18')}</td>
            <td>{t('index:tp18')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=3fM9o72ykww&amp;ab_channel=TEDxTalks" rel="nofollow">{t('index:tt19')}</a>
            </td>
            <td>{t('index:ta19')}</td>
            <td>{t('index:tp19')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=kcrdpuSvHmE&amp;ab_channel=Keto-Mojo" rel="nofollow">{t('index:tt20')}</a>
            </td>
            <td>{t('index:ta20')}</td>
            <td>{t('index:tp20')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1369270/" rel="nofollow">{t('index:tt21')}</a>
            </td>
            <td>{t('index:ta21')}</td>
            <td>{t('index:tp21')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://academic.oup.com/ajcn/article/113/6/1565/6178918?login=false" rel="nofollow">{t('index:tt22')}</a>
            </td>
            <td>{t('index:ta22')}</td>
            <td>{t('index:tp22')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://pubmed.ncbi.nlm.nih.gov/26853923/" rel="nofollow">{t('index:tt23')}</a>
            </td>
            <td>{t('index:ta23')}</td>
            <td>{t('index:tp23')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=NW0-m0x1sZ8&amp;ab_channel=Dr.StenEkberg" rel="nofollow">{t('index:tt24')}</a>
            </td>
            <td>{t('index:ta24')}</td>
            <td>{t('index:tp24')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=SLFsbQNzqv0&amp;ab_channel=Dr.StenEkberg" rel="nofollow">{t('index:tt25')}</a>
            </td>
            <td>{t('index:ta25')}</td>
            <td>{t('index:tp25')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.wcrf.org/dietandcancer/cancer-trends/comparing-more-and-less-developed-countries" rel="nofollow">{t('index:tt26')}</a>
            </td>
            <td>{t('index:ta26')}</td>
            <td>{t('index:tp26')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5530187/" rel="nofollow">{t('index:tt27')}</a>
            </td>
            <td>{t('index:ta27')}</td>
            <td>{t('index:tp27')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.everydayhealth.com/type-2-diabetes/high-and-low-blood-sugar/" rel="nofollow">{t('index:tt28')}</a>
            </td>
            <td>{t('index:ta28')}</td>
            <td>{t('index:tp28')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=tIuj-oMN-Fk&amp;ab_channel=LowCarbDownUnder" rel="nofollow">{t('index:tt29')}</a>
            </td>
            <td>{t('index:ta29')}</td>
            <td>{t('index:tp29')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=x91vpkXCmH8&amp;ab_channel=Lakanto" rel="nofollow">{t('index:tt30')}</a>
            </td>
            <td>{t('index:ta30')}</td>
            <td>{t('index:tp30')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/exd.14072" rel="nofollow">{t('index:tt31')}</a>
            </td>
            <td>{t('index:ta31')}</td>
            <td>{t('index:tp31')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5605648/" rel="nofollow">{t('index:tt32')}</a>
            </td>
            <td>{t('index:ta32')}</td>
            <td>{t('index:tp32')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.sciencedirect.com/science/article/pii/S0278691520305913?via%3Dihub" rel="nofollow">{t('index:tt33')}</a>
            </td>
            <td>{t('index:ta33')}</td>
            <td>{t('index:tp33')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=DlI6DMZxgBY&amp;ab_channel=LowCarbDownUnder" rel="nofollow">{t('index:tt34')}</a>
            </td>
            <td>{t('index:ta34')}</td>
            <td>{t('index:tp34')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/fsn3.1809" rel="nofollow">{t('index:tt35')}</a>
            </td>
            <td>{t('index:ta35')}</td>
            <td>{t('index:tp35')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.drhungmd.com/blog/4-ways-you-can-get-skin-cancer-besides-sunlight/" rel="nofollow">{t('index:tt36')}</a>
            </td>
            <td>{t('index:ta36')}</td>
            <td>{t('index:tp36')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.sciencedirect.com/science/article/pii/S2211124719309246" rel="nofollow">{t('index:tt37')}</a>
            </td>
            <td>{t('index:ta37')}</td>
            <td>{t('index:tp37')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.nytimes.com/2010/12/28/health/28cancer.html" rel="nofollow">{t('index:tt38')}</a>
            </td>
            <td>{t('index:ta38')}</td>
            <td>{t('index:tp38')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7379157/" rel="nofollow">{t('index:tt39')}</a>
            </td>
            <td>{t('index:ta39')}</td>
            <td>{t('index:tp39')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.nature.com/articles/6602627" rel="nofollow">{t('index:tt40')}</a>
            </td>
            <td>{t('index:ta40')}</td>
            <td>{t('index:tp40')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://translational-medicine.biomedcentral.com/articles/10.1186/s12967-021-03122-8" rel="nofollow">{t('index:tt41')}</a>
            </td>
            <td>{t('index:ta41')}</td>
            <td>{t('index:tp41')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://academic.oup.com/cdn/article/5/12/nzab133/6415894" rel="nofollow">{t('index:tt42')}</a>
            </td>
            <td>{t('index:ta42')}</td>
            <td>{t('index:tp42')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=OjkzfeJz66o&amp;ab_channel=TED-Ed" rel="nofollow">{t('index:tt43')}</a>
            </td>
            <td>{t('index:ta43')}</td>
            <td>{t('index:tp43')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0113919" rel="nofollow">{t('index:tt44')}</a>
            </td>
            <td>{t('index:ta44')}</td>
            <td>{t('index:tp44')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=dVArDzYynYc&amp;ab_channel=TEDxTalks" rel="nofollow">{t('index:tt45')}</a>
            </td>
            <td>{t('index:ta45')}</td>
            <td>{t('index:tp45')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=f6rSuJ2YheQ&amp;ab_channel=TEDxTalks" rel="nofollow">{t('index:tt46')}</a>
            </td>
            <td>{t('index:ta46')}</td>
            <td>{t('index:tp46')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5668137/" rel="nofollow">{t('index:tt47')}</a>
            </td>
            <td>{t('index:ta47')}</td>
            <td>{t('index:tp47')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5842175/" rel="nofollow">{t('index:tt48')}</a>
            </td>
            <td>{t('index:ta48')}</td>
            <td>{t('index:tp48')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S2211912421000572?via%3Dihub" rel="nofollow">{t('index:tt49')}</a>
            </td>
            <td>{t('index:ta49')}</td>
            <td>{t('index:tp49')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://sajs.co.za/article/view/3566" rel="nofollow">{t('index:tt50')}</a>
            </td>
            <td>{t('index:ta50')}</td>
            <td>{t('index:tp50')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5442682/" rel="nofollow">{t('index:tt51')}</a>
            </td>
            <td>{t('index:ta51')}</td>
            <td>{t('index:tp51')}</td>
          </tr>
          <tr>
            <td>
              <a href="http://www.greekmedicine.net/hygiene/Fasting_and_Purification.html" rel="nofollow">{t('index:tt52')}</a>
            </td>
            <td>{t('index:ta52')}</td>
            <td>{t('index:tp52')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=0ka9WBEijhk" rel="nofollow">{t('index:tt53')}</a>
            </td>
            <td>{t('index:ta53')}</td>
            <td>{t('index:tp53')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4235292/" rel="nofollow">{t('index:tt54')}</a>
            </td>
            <td>{t('index:ta54')}</td>
            <td>{t('index:tp54')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://pubmed.ncbi.nlm.nih.gov/17988334/" rel="nofollow">{t('index:tt55')}</a>
            </td>
            <td>{t('index:ta55')}</td>
            <td>{t('index:tp55')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://ourworldindata.org/cancer" rel="nofollow">{t('index:tt56')}</a>
            </td>
            <td>{t('index:ta56')}</td>
            <td>{t('index:tp56')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=CsPSJ-dXqks&amp;ab_channel=LowCarbDownUnder" rel="nofollow">{t('index:tt57')}</a>
            </td>
            <td>{t('index:ta57')}</td>
            <td>{t('index:tp57')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5466513/" rel="nofollow">{t('index:tt58')}</a>
            </td>
            <td>{t('index:ta58')}</td>
            <td>{t('index:tp58')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://pubmed.ncbi.nlm.nih.gov/17918181/" rel="nofollow">{t('index:tt59')}</a>
            </td>
            <td>{t('index:ta59')}</td>
            <td>{t('index:tp59')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://academic.oup.com/ajcn/article/76/6/1308/4689578" rel="nofollow">{t('index:tt60')}</a>
            </td>
            <td>{t('index:ta60')}</td>
            <td>{t('index:tp60')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=9nXop2lLDa4&amp;ab_channel=TalksatGoogle" rel="nofollow">{t('index:tt61')}</a>
            </td>
            <td>{t('index:ta61')}</td>
            <td>{t('index:tp61')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://aacrjournals.org/cancerres/article/9/12/724/649210/The-Influence-of-the-Degree-of-Caloric-Restriction" rel="nofollow">{t('index:tt62')}</a>
            </td>
            <td>{t('index:ta62')}</td>
            <td>{t('index:tp62')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.pnas.org/content/118/7/e2003926118" rel="nofollow">{t('index:tt63')}</a>
            </td>
            <td>{t('index:ta63')}</td>
            <td>{t('index:tp63')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://josephtramazzo.medium.com/autophagy-fasting-part-2-how-to-trigger-maximize-autophagy-78a137b787b7" rel="nofollow">{t('index:tt64')}</a>
            </td>
            <td>{t('index:ta64')}</td>
            <td>{t('index:tp64')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.karger.com/Article/FullText/441266" rel="nofollow">{t('index:tt65')}</a>
            </td>
            <td>{t('index:ta65')}</td>
            <td>{t('index:tp65')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://academic.oup.com/jn/article/147/4/612/4630425" rel="nofollow">{t('index:tt66')}</a>
            </td>
            <td>{t('index:ta66')}</td>
            <td>{t('index:tp66')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Autophagy" rel="nofollow">{t('index:tt67')}</a>
            </td>
            <td>{t('index:ta67')}</td>
            <td>{t('index:tp67')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Fasting#Christianity" rel="nofollow">{t('index:tt68')}</a>
            </td>
            <td>{t('index:ta68')}</td>
            <td>{t('index:tp68')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Paleolithic" rel="nofollow">{t('index:tt69')}</a>
            </td>
            <td>{t('index:ta69')}</td>
            <td>{t('index:tp69')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Shanidar_Cave" rel="nofollow">{t('index:tt70')}</a>
            </td>
            <td>{t('index:ta70')}</td>
            <td>{t('index:tp70')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=pcXbruZcT_Q" rel="nofollow">{t('index:tt71')}</a>
            </td>
            <td>{t('index:ta71')}</td>
            <td>{t('index:tp71')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4470583/" rel="nofollow">{t('index:tt72')}</a>
            </td>
            <td>{t('index:ta72')}</td>
            <td>{t('index:tp72')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.cell.com/cell-metabolism/fulltext/S1550-4131(16)30643-X?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS155041311630643X%3Fshowall%3Dtrue" rel="nofollow">{t('index:tt73')}</a>
            </td>
            <td>{t('index:ta73')}</td>
            <td>{t('index:tp73')}</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5325395/" rel="nofollow">{t('index:tt74')}</a>
            </td>
            <td>{t('index:ta74')}</td>
            <td>{t('index:tp74')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
