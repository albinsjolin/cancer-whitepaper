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
        <title>Cancer.com.ai</title>
        <meta name="description" content="Cancer.com.ai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{t('index:whitepaper_title')}</h1>

      <h2>{t('index:whitepaper_t1')}</h2>
      <p>{t('index:whitepaper_p1')}</p>

      <h2>{t('index:whitepaper_t2')}</h2>
      <p>{t('index:whitepaper_p2')}</p>

      <h2>{t('index:whitepaper_t3')}</h2>
      <h3>{t('index:whitepaper_t4')}</h3>

      <p>{t('index:whitepaper_p3')}</p>
      <p>{t('index:whitepaper_p4')}</p>
      <p>{t('index:whitepaper_p5')}</p>
      <h3>{t('index:whitepaper_t5')}</h3>

      <p>{t('index:whitepaper_p6')}</p>
      <p>{t('index:whitepaper_p7')}</p>
      <p>{t('index:whitepaper_p8')}</p>
      <p>{t('index:whitepaper_p9')}</p>
      <p>{t('index:whitepaper_p10')}</p>
      <p>{t('index:whitepaper_p11')}</p>

      <h3>{t('index:whitepaper_t6')}</h3>
      <p>{t('index:whitepaper_p12')}</p>

      <h3>{t('index:whitepaper_t7')}</h3>
      <p>{t('index:whitepaper_p13')}</p>
      <p>{t('index:whitepaper_p14')}</p>

      <h3>{t('index:whitepaper_t8')}</h3>
      <p>{t('index:whitepaper_p15')}</p>
      <p>{t('index:whitepaper_p16')}</p>

      <h3>{t('index:whitepaper_t9')}</h3>
      <p>{t('index:whitepaper_p17')}</p>
      <p>{t('index:whitepaper_p18')}</p>

      <h3>{t('index:whitepaper_t10')}</h3>
      <p>{t('index:whitepaper_p19')}</p>
      <p>{t('index:whitepaper_p20')}</p>
      <p>{t('index:whitepaper_p21')}</p>
      <p>{t('index:whitepaper_p22')}</p>
      <p>{t('index:whitepaper_p23')}</p>

      <h3>{t('index:whitepaper_t11')}</h3>
      <p>{t('index:whitepaper_p24')}</p>

      <h2>{t('index:whitepaper_t12')}</h2>
      <h3>{t('index:whitepaper_t13')}</h3>
      <p>{t('index:whitepaper_p25')}</p>

      <h3>{t('index:whitepaper_t14')}</h3>
      <p>{t('index:whitepaper_p26')}</p>
      <p>{t('index:whitepaper_p27')}</p>
      <p>{t('index:whitepaper_p28')}</p>
      <p>{t('index:whitepaper_p29')}</p>

      <h3>{t('index:whitepaper_t15')}</h3>
      <p>{t('index:whitepaper_p30')}</p>
      <p>{t('index:whitepaper_p31')}</p>
      <p>{t('index:whitepaper_p32')}</p>

      <h3>{t('index:whitepaper_t16')}</h3>
      <p>{t('index:whitepaper_p33')}</p>
      <p>{t('index:whitepaper_p34')}</p>

      <h3>{t('index:whitepaper_t17')}</h3>
      <p>{t('index:whitepaper_p35')}</p>
      <p>{t('index:whitepaper_p36')}</p>
      <p>{t('index:whitepaper_p37')}</p>
      <p>{t('index:whitepaper_p38')}</p>

      <h3>{t('index:whitepaper_t18')}</h3>
      <p>{t('index:whitepaper_p39')}</p>
      <p>{t('index:whitepaper_p40')}</p>
      <p>{t('index:whitepaper_p41')}</p>
      <p>{t('index:whitepaper_p42')}</p>

      <h3>{t('index:whitepaper_t19')}</h3>
      <p>{t('index:whitepaper_p43')}</p>

      <h3>{t('index:whitepaper_t20')}</h3>
      <p>{t('index:whitepaper_p44')}</p>

      <h3>{t('index:whitepaper_t21')}</h3>
      <p>{t('index:whitepaper_p45')}</p>
      <p>{t('index:whitepaper_p46')}</p>

      <h3>{t('index:whitepaper_t22')}</h3>
      <p>{t('index:whitepaper_p47')}</p>

      <h3>{t('index:whitepaper_t23')}</h3>
      <p>{t('index:whitepaper_p48')}</p>
      <p>{t('index:whitepaper_p49')}</p>

      <h3>{t('index:whitepaper_t24')}</h3>
      <p>{t('index:whitepaper_p50')}</p>

      <h3>{t('index:whitepaper_t25')}</h3>
      <p>{t('index:whitepaper_p51')}</p>

      <h3>{t('index:whitepaper_t26')}</h3>
      <p>{t('index:whitepaper_p52')}</p>
      <p>{t('index:whitepaper_p53')}</p>
      <p>{t('index:whitepaper_p54')}</p>

      <h2>{t('index:whitepaper_t27')}</h2>
      <p>{t('index:whitepaper_p55')}</p>
      <p>{t('index:whitepaper_p56')}</p>

      <h2>{t('index:whitepaper_t28')}</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Published</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <a href="https://www.alimentarium.org/en/knowledge/voluntary-fasting">Voluntary fasting</a>
            </td>
            <td>Alimentarium</td>
            <td>2016</td>
          </tr>
          <tr>
            <td>
              <a href="https://pubmed.ncbi.nlm.nih.gov/27693581/">Fasting boosts sensitivity of human skin melanoma to cisplatin-induced cell death</a>
            </td>
            <td>Fernanda Antunes, Marco Corazzari, Gustavo Pereira, Gian Maria Fimia, Mauro Piacentini and Soraya Smaili</td>
            <td>2016-09-29</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.hindawi.com/journals/jnme/2020/3642035/">Long-Term Ketogenic Diet Induces Metabolic Acidosis, Anemia, and Oxidative Stress in Healthy Wistar Rats</a>
            </td>
            <td>Aryadi Arsyad, Irfan Idris, Andi A. Rasyid, Rezky A. Usman, Kiki R. Faradillah, Wa Ode U. Latif, Zidni I. Lubis, Aminuddin Aminuddin, Ika Yustisia and Yulia Y. Djabir</td>
            <td>2020-06-29</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=tJICCFZLgHY&amp;ab_channel=LowCarbDownUnder">Dr. Eric Berg - &apos;Practical Keto&apos;</a>
            </td>
            <td>Eric Berg</td>
            <td>2020-07-23</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4454940/">Sex, Sport, IGF-1 and the Community Effect in Height Hypothesis</a>
            </td>
            <td>Barry Bogin, Michael Hermanussen, Werner F. Blum and Christian Aßmann</td>
            <td>2015-05-12</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=KGFUPSdATuw&amp;ab_channel=Dr.Boz%5BAnnetteBosworth%2CMD%5D">Your Brain on Ketones; Alzheimer&apos;s, Memory &amp; MCT</a>
            </td>
            <td>Annette Bosworth</td>
            <td>2019-04-12</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2671032/">The Protective Role of Melanin Against UV Damage in Human Skin</a></td>
            <td>Michaela Brenner and Vincent J. Hearing</td>
            <td>2009-05-01</td>
          </tr>
          <tr>
            <td>
              <a href="https://pubmed.ncbi.nlm.nih.gov/26094889/">A Periodic Diet that Mimics Fasting Promotes Multi-System Regeneration, Enhanced Cognitive Performance, and Healthspan</a>
            </td>
            <td>Sebastian Brandhorst, In Young Choi, Min Wei, Chia Wei Cheng, Sargis Sedrakyan, Gerardo Navarrete, Louis Dubeau, Li Peng Yap, Ryan Park, Manlio Vinciguerra, Stefano Di Biase, Hamed Mirzaei, Mario G Mirisola, Patra Childress, Lingyun Ji, Susan Groshen, Fabio Penna, Patrizio Odetti, Laura Perin, Peter S Conti, Yuji Ikeno, Brian K Kennedy, Pinchas Cohen, Todd E Morgan, Tanya B Dorff and Valter D Longo</td>
            <td>2015-07-07</td>
          </tr>
          <tr>
            <td>
              <a href="https://pubmed.ncbi.nlm.nih.gov/28925405/">Intermittent energy restriction improves weight loss efficiency in obese men: the MATADOR study</a>
            </td>
            <td>N M Byrne, A Sainsbury, N A King, A P Hills and R E Wood</td>
            <td>2017-08-17</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.cdc.gov/diabetes/basics/what-is-type-1-diabetes.html">What Is Type 1 Diabetes?</a>
            </td>
            <td>Centers for Disease Control and Prevention</td>
            <td>2022-03-11</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.mdpi.com/2072-6643/11/12/3016/htm">A Comparison of Dietary Protein Digestibility, Based on DIAAS Scoring, in Vegetarian and Non-Vegetarian Athletes</a>
            </td>
            <td>Corinne Ciuris, Heidi M. Lynch, Christopher Wharton and Carol S. Johnston</td>
            <td>2019-12-10</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.cancer.org.au/cancer-information/types-of-cancer/skin-cancer">Skin cancer</a>
            </td>
            <td>Cancer Council</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/books/NBK482457/">Paleolithic Diet</a>
            </td>
            <td>Hima J. Challa, Manav Bandlamudi and Kalyan R. Uppaluri</td>
            <td>2021-08-01</td>
          </tr>
          <tr>
            <td>
              <a href="https://pubmed.ncbi.nlm.nih.gov/24905167/">Prolonged fasting reduces IGF-1/PKA to promote hematopoietic-stem-cell-based regeneration and reverse immunosuppression</a>
            </td>
            <td>Chia-Wei Cheng, Gregor B Adams, Laura Perin, Min Wei, Xiaoying Zhou, Ben S Lam, Stefano Da Sacco, Mario Mirisola, David I Quinn, Tanya B Dorff, John J Kopchick and Valter D Longo</td>
            <td>2014-06-05</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7284700/">Shedding Light on the Effects of Calorie Restriction and Its Mimetics on Skin Biology</a>
            </td>
            <td>Yeon Ja Choi</td>
            <td>2020-05-24</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6950580/">The Effects of Calorie Restriction on Autophagy: Role on Aging Intervention</a>
            </td>
            <td>Ki Wung Chung and Hae Young Chung</td>
            <td>2019-12-11</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4209489/">The &quot;Metabolic Winter&quot; Hypothesis: A Cause of the Current Epidemics of Obesity and Cardiometabolic Disease</a>
            </td>
            <td>Raymond J. Cronise, David A. Sinclair and Andrew A. Bremer</td>
            <td>2014-09-01</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=3fM9o72ykww&amp;ab_channel=TEDxTalks">Starving cancer: Dominic D&apos;Agostino at TEDxTampaBay</a>
            </td>
            <td>Dominic D&apos;Agostino</td>
            <td>2013-12-04</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=kcrdpuSvHmE&amp;ab_channel=Keto-Mojo">Keto and Cancer</a>
            </td>
            <td>Thomas DeLauer</td>
            <td>2019-12-02</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1369270/">Of mice and men</a>
            </td>
            <td>Lloyd Demetrius</td>
            <td>2005-07-06</td>
          </tr>
          <tr>
            <td>
              <a href="https://academic.oup.com/ajcn/article/113/6/1565/6178918?login=false">Growth, body composition, and cardiovascular and nutritional risk of 5- to 10-y-old children consuming vegetarian, vegan, or omnivore diets</a>
            </td>
            <td>Małgorzata A Desmond, Jakub G Sobiecki, Maciej Jaworski, Paweł Płudowski, Jolanta Antoniewicz, Meghan K Shirley, Simon Eaton, Janusz Książyk, Mario Cortina-Borja, Bianca De Stavola, Mary Fewtrell and Jonathan C K Wells</td>
            <td>2021-03-19</td>
          </tr>
          <tr>
            <td>
              <a href="https://pubmed.ncbi.nlm.nih.gov/26853923/">Vegetarian, vegan diets and multiple health outcomes: A systematic review with meta-analysis of observational studies</a>
            </td>
            <td>Monica Dinu, Rosanna Abbate, Gian Franco Gensini, Alessandro Casini and Francesco Sofi</td>
            <td>2017-11-22</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=NW0-m0x1sZ8&amp;ab_channel=Dr.StenEkberg">How To Count Carbs On A Keto Diet To Lose Weight Fast</a>
            </td>
            <td>Sten Ekberg</td>
            <td>2021-02-19</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=SLFsbQNzqv0&amp;ab_channel=Dr.StenEkberg">Ketosis vs Ketoacidosis (Keto Diet Dangerous?)</a>
            </td>
            <td>Sten Ekberg</td>
            <td>2019-02-18</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.wcrf.org/dietandcancer/cancer-trends/comparing-more-and-less-developed-countries">Comparing more and less developed countries How cancer rates vary across countries at different stages of development</a>
            </td>
            <td>Bray F, Ferlay J, Soerjomataram I, Siegel RL, Torre LA and Jemal A</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.everydayhealth.com/type-2-diabetes/high-and-low-blood-sugar/">What Are the Signs of High and Low Blood Sugar?</a>
            </td>
            <td>K. Aleisha Fetters and Dr. Philis-Tsimikas</td>
            <td>2020-05-14</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=tIuj-oMN-Fk&amp;ab_channel=LowCarbDownUnder">Dr. Jason Fung - &apos;Therapeutic Fasting - Solving the Two-Compartment Problem&apos;</a>
            </td>
            <td>Jason Fung</td>
            <td>2016-03-10</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=x91vpkXCmH8&amp;ab_channel=Lakanto">Beating Cancer with a Ketogenic Diet</a>
            </td>
            <td>Alison Gannett</td>
            <td>2016-10-26</td>
          </tr>
          <tr>
            <td>
              <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/exd.14072">Melanoma—Time to fast or time to feast? An interplay between PPARs, metabolism and immunity</a>
            </td>
            <td>Maja Grabacka, Przemyslaw M. Plonka and Krzysztof Reiss</td>
            <td>2020-01-20</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5605648/">Impact of Resistance Training on Skeletal Muscle Mitochondrial Biogenesis, Content, and Function</a>
            </td>
            <td>Thomas Groennebaek and Kristian Vissing</td>
            <td>2017-09-15</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.sciencedirect.com/science/article/pii/S0278691520305913?via%3Dihub">Interplay between oxidative damage, the redox status, and metabolic biomarkers during long-term fasting</a>
            </td>
            <td>Franziska Grundler, Robin Mesnage, Nikolaos Goutzourelas, Fotios Tekos, Sotiria Makri, Michel Brack, Demetrios Kouretas and Françoise Wilhelmi de Toledo</td>
            <td>2020-08-25</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=DlI6DMZxgBY&amp;ab_channel=LowCarbDownUnder">Dr. David Harper - &apos;Ketogenic Diets to Prevent and Treat Cancer (and maybe COVID19)&apos;</a>
            </td>
            <td>David Harper</td>
            <td>2020-06-10</td>
          </tr>
          <tr>
            <td>
              <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/fsn3.1809">Comprehensive overview of the quality of plant- And animal-sourced proteins based on the digestible indispensable amino acid score</a></td>
            <td>Laure Herreman, Paul Nommensen, Bart Pennings and Marc C. Laus</td>
            <td>2020-08-25</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.drhungmd.com/blog/4-ways-you-can-get-skin-cancer-besides-sunlight/">4 WAYS YOU CAN GET SKIN CANCER BESIDES SUNLIGHT</a>
            </td>
            <td>Vincent Hung</td>
            <td>2022-03-03</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.sciencedirect.com/science/article/pii/S2211124719309246">p63 and SOX2 Dictate Glucose Reliance and Metabolic Vulnerabilities in Squamous Cell Carcinomas</a>
            </td>
            <td>Meng-Hsiung Hsieh, Joshua H. Choe, Jashkaran Gadhvi, Yoon Jung Kim, Marcus A. Arguez, Madison Palmer, Haleigh Gerold, Chance Nowak, Hung Do, Simbarashe Mazambani, Jordan K. Knighton, Matthew Cha, Justin Goodwin, Min Kyu Kang, Ji Yun Jeong, Shin Yup Lee, Brandon Faubert, Zhenyu Xuan, E. Dale Abel, Claudio Scafoglio, David B. Shackelford, John D. Minna, Pankaj K. Singh, Vladimir Shulaev, Leonidas Bleris, Kenneth Hoyt, James Kim, Masahiro Inoue, Ralph J. DeBerardinis, Tae Hoon Kim and Jung-whan Kim</td>
            <td>2019-08-13</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.nytimes.com/2010/12/28/health/28cancer.html">Unearthing Prehistoric Tumors, and Debate</a>
            </td>
            <td>George Johnson</td>
            <td>2010-12-27</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7379157/">The Evolving Role of Diet in Prostate Cancer Risk and Progression</a>
            </td>
            <td>Adeel Kaiser, Christopher Haskins, Mohummad M. Siddiqui, Arif Hussain and Christopher D&apos;Adamo</td>
            <td>2020-06-24</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.nature.com/articles/6602627">Role of insulin-like growth factor 1 receptor signalling in cancer</a>
            </td>
            <td>O Larsson, A Girnita and L Girnita</td>
            <td>2005-05-24</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=OjkzfeJz66o&amp;ab_channel=TED-Ed">Can we eat to starve cancer? - William Li</a>
            </td>
            <td>William Li</td>
            <td>2014-04-08</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=dVArDzYynYc&amp;ab_channel=TEDxTalks">Fasting: Awakening the Rejuvenation from Within - Valter Longo - TEDxEchoPark</a>
            </td>
            <td>Valter Longo</td>
            <td>2016-12-05</td>
          </tr>
          <tr>
            <td>
              <a href="https://academic.oup.com/cdn/article/5/12/nzab133/6415894">Behavioral Characteristics and Self-Reported Health Status among 2029 Adults Consuming a “Carnivore Diet”</a>
            </td>
            <td>Belinda S Lennerz, Jacob T Mey, Owen H Henn and David S Ludwig</td>
            <td>2021-11-02</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=f6rSuJ2YheQ&amp;ab_channel=TEDxTalks">Starving cancer away</a>
            </td>
            <td>Sophia Lunt</td>
            <td>2016-04-15</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5668137/">Long-term administration of nicotinamide mononucleotide mitigates age-associated physiological decline in mice</a>
            </td>
            <td>Kathryn F. Mills, Shohei Yoshida, Liana R. Stein, Alessia Grozio, Shunsuke Kubota, Yo Sasaki, Philip Redpath, Marie E. Migaud, Rajendra S. Apte, Koji Uchida, Jun Yoshino and Shin-ichiro Imai</td>
            <td>2017-12-13</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5842175/">The role of Sulforaphane in cancer chemoprevention and health benefits: a mini-review</a>
            </td>
            <td>Reza Bayat Mokhtari, Narges Baluch, Tina S. Homayouni, Evgeniya Morgatskaya, Sushil Kumar, Parandis Kazemi and Herman Yeger</td>
            <td>2017-07-13</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S2211912421000572?via%3Dihub">Population protein intakes and food sustainability indices: The metrics matter</a>
            </td>
            <td>Paul J. Moughan</td>
            <td>2021-06-01</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5442682/">When less may be more: calorie restriction and response to cancer therapy</a>
            </td>
            <td>Ciara H. O&apos;Flanagan, Laura A. Smith, Shannon B. McDonell and Stephen D. Hursting</td>
            <td>2017-05-24</td>
          </tr>
          <tr>
            <td>
              <a href="http://www.greekmedicine.net/hygiene/Fasting_and_Purification.html">FASTING AND PURIFICATION</a>
            </td>
            <td>David K. Osborn</td>
            <td>2007</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=0ka9WBEijhk">TEDx Wouldn&apos;t Post This...</a>
            </td>
            <td>Mikhaila Peterson</td>
            <td>2022-02-13</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4235292/">Ketone supplementation decreases tumor cell viability and prolongs survival of mice with metastatic cancer</a>
            </td>
            <td>AM Poff, C Ari, P Arnold, TN Seyfried and DP D&apos;Agostino</td>
            <td>2014-05-14</td>
          </tr>
          <tr>
            <td>
              <a href="https://pubmed.ncbi.nlm.nih.gov/17988334/">Skin tag as a cutaneous marker for impaired carbohydrate metabolism: a case-control study</a>
            </td>
            <td>Abbas Rasi, Razieh Soltani-Arabshahi and Nasim Shahbazi</td>
            <td>2007-11-02</td>
          </tr>
          <tr>
            <td>
              <a href="https://ourworldindata.org/cancer">Cancer</a>
            </td>
            <td>Max Roser and Hannah Ritchie</td>
            <td>2015-06</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=CsPSJ-dXqks&amp;ab_channel=LowCarbDownUnder">Dr. Paul Saladino - &apos;Debunking The Carnivore Diet&apos;</a>
            </td>
            <td>Paul Saladino</td>
            <td>2020-10-08</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5466513/">Autophagy in UV damage response</a>
            </td>
            <td>Ashley Sample and Yu-Ying He</td>
            <td>
              2017-01-27
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://academic.oup.com/ajcn/article/76/6/1308/4689578">Estimation of the net acid load of the diet of ancestral preagricultural Homo sapiens and their hominid ancestors</a>
            </td>
            <td>Anthony Sebastian, Lynda A Frassetto, Deborah E Sellmeyer, Renée L Merriam and R Curtis Morris Jr</td>
            <td>2002-12-01</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=9nXop2lLDa4&amp;ab_channel=TalksatGoogle">Why We Age and Why We Don&apos;t Have To - David Sinclair - Talks at Google</a>
            </td>
            <td>David Sinclair</td>
            <td>2019-10-10</td>
          </tr>
          <tr>
            <td>
              <a href="https://aacrjournals.org/cancerres/article/9/12/724/649210/The-Influence-of-the-Degree-of-Caloric-Restriction">The Influence of the Degree of Caloric Restriction on the Formation of Skin Tumors and Hepatomas in Mice</a>
            </td>
            <td>Albert Tannenbaum and Herbert Silverstone</td>
            <td>1949-12-01</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.pnas.org/content/118/7/e2003926118">Hormone seasonality in medical records suggests circannual endocrine circuits</a>
            </td>
            <td>Avichai Tendler, Alon Bar, Netta Mendelsohn-Cohen, Omer Karin, Yael Korem Kohanim, Lior Maimon, Tomer Milo, Moriya Raz, Avi Mayo, Amos Tanay and Uri Alon</td>
            <td>2021-02-16</td>
          </tr>
          <tr>
            <td>
              <a href="https://josephtramazzo.medium.com/autophagy-fasting-part-2-how-to-trigger-maximize-autophagy-78a137b787b7">Fasting &amp; Autophagy (Part 2) — How to Trigger &amp; Maximize Autophagy</a>
            </td>
            <td>Joseph Tramazzo</td>
            <td>2019-07-25</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.karger.com/Article/FullText/441266">Sunlight Has Cardiovascular Benefits Independently of Vitamin D</a>
            </td>
            <td>Richard B. Weller</td>
            <td>2016-01-15</td>
          </tr>
          <tr>
            <td>
              <a href="https://academic.oup.com/jn/article/147/4/612/4630425">Paleolithic and Mediterranean Diet Pattern Scores Are Inversely Associated with All-Cause and Cause-Specific Mortality in Adults</a>
            </td>
            <td>Kristine A Whalen, Suzanne Judd, Marjorie L McCullough, W Dana Flanders, Terryl J Hartman and Roberd M Bostick</td>
            <td>2017-02-18</td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Autophagy">Autophagy</a>
            </td>
            <td>Wikipedia</td>
            <td>2021-02-06</td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Fasting#Christianity">Fasting</a>
            </td>
            <td>Wikipedia</td>
            <td>2021-05-13</td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Paleolithic">Paleolithic</a>
            </td>
            <td>Wikipedia</td>
            <td>2022-02-16</td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Shanidar_Cave">Shanidar Cave</a>
            </td>
            <td>Wikipedia</td>
            <td>2021-04-21</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.youtube.com/watch?v=pcXbruZcT_Q">ALL ABOUT FASTING - Q&amp;A 10 (Longterm fasting vs. intermittent fasting) - Buchinger Wilhelmi</a>
            </td>
            <td>Buchinger Wilhelmi</td>
            <td>2021-03-12</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4470583/">The Ketogenic Diet Alters the Hypoxic Response and Affects Expression of Proteins Associated with Angiogenesis, Invasive Potential and Vascular Permeability in a Mouse Glioma Model</a>
            </td>
            <td>Eric C. Woolf, Kara L. Curley, Qingwei Liu, Gregory H. Turner, Julie A. Charlton, Mark C. Preul and Adrienne C. Scheck</td>
            <td>2015-06-17</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.cell.com/cell-metabolism/fulltext/S1550-4131(16)30643-X?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS155041311630643X%3Fshowall%3Dtrue">Prevention of Dietary-Fat-Fueled Ketogenesis Attenuates BRAF V600E Tumor Growth</a>
            </td>
            <td>Siyuan Xia, Ruiting Lin, Lingtao Jin, Liang Zhao, Hee-Bum Kang, Yaozhu Pan, Shuangping Liu, Guoqing Qian, Zhiyu Qian, Evmorfia Konstantakou, Baotong Zhang, Jin-Tang Dong, Young Rock Chung, Omar Abdel-Wahab, Taha Merghoub, Lu Zhou, Ragini R. Kudchadkar, David H. Lawson, Hanna J. Khoury, Fadlo R. Khuri, Lawrence H. Boise, Sagar Lonial, Benjamin H. Lee, Brian P. Pollack, Jack L. Arbiser, Jun Fan, Qun-Ying Lei and Jing Chen</td>
            <td>2017-02-07</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5325395/">Leucine deprivation inhibits proliferation and induces apoptosis of human breast cancer cells via fatty acid synthase</a>
            </td>
            <td>Fei Xiao, Chunxia Wang, Hongkun Yin, Junjie Yu, Shanghai Chen, Jing Fang and Feifan Guo</td>
            <td>2016-08-26</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
