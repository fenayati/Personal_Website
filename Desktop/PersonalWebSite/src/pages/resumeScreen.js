import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'
import Title from '../components/title'
import Skill from '../components/skill'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import MyStepper from '../components/MyStepper'
import Teacher from '../components/Teacher'
import ProfileImage from '../assets/images/profile.jpg'
import Helmet from '../components/Helmet'
import { getTranslate } from '../localization'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    backgroundImage: "linear-gradient(to right, #1d2429 0%, #2a2c3b 100%)",
  },
  skillGrid: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 30,
    paddingLeft: 30,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 5,
      paddingLeft: 5,
    }

  },
  skillSecondTitle: {
    marginLeft: 10
  },
  titr: {
    fontWeight: 'bold',
    color: theme.palette.primary.main
  },

}))

export default function FarshidScreen() {
  const translate = getTranslate()
  const classes = useStyles()
  const educationalSteps = [
    { id: -1, date: "", title: "", subtitle: "", content: "" },
    { id: 1, date: "1397-1397", title: "کارشناسی ارشد", subtitle: "دانشگاه شهید بهشتی", content: "تحصیل در رشته مهندسی برق گرایش مخابرات - سیستم های مخابراتی ( انصراف به دلیل مشغله های کاری)" },
    { id: 1, date: "1395-1395", title: "کارشناسی ارشد", subtitle: "دانشگاه تهران", content: "تحصیل در رشته مهندسی برق گرایش مخابرات - سیستم های مخابراتی ( انصراف به دلیل مشغله های کاری)" },
    { id: 3, date: "1390-1394", title: "کارشناسی", subtitle: "دانشگاه اصفهان", content: "تحصیل در رشته مهندسی برق گرایش الکترونیک" },
    { id: -2, date: "", title: "", subtitle: "", content: "" },
  ]
  const workingSteps = [
    { id: -1, date: "", title: "", subtitle: "", content: "" },
    { id: 1, date: "1397 - اکنون", title: "شرکت فنی مهندسی بامبو، فاتحان آینده", subtitle: "مدیرعامل و موسس شرکت", content: "انجام پروژه برنامه نویسی، طراحی وب سایت، طراحی اپلیکیشن های موبایل و اینترنت اشیا" },
    { id: 2, date: "1394 - اکنون", title: "موسسه آموزش آنلاین آسان یادبگیر", subtitle: "هم بنیان گذار و مدرس مجموعه", content: "تولید آموزش های ویدئویی و آنلاین از مباحث روز دنیای برنامه نویسی فرانت اند، بک اند، اپلیکیشن موبایل و بازی سازی" },
    { id: 3, date: "1398 - اکنون", title: "پروژه حقوق بین الملل لگامارت", subtitle: "طراحی وب سایت کارهای حقوقی بین المللی Legamart", content: "فرانت اند  react js - بک اند Laravel" },
    { id: 4, date: "1398 - اکنون", title: "مجتمع فنی تهران شعبه سعادت آباد", subtitle: "مدرس دوره های آموزشی مجتمع", content: "مدرس دوره های آموزش React.js مجتمع فنی تهران شعبه اصلی" },
    { id: 5, date: "1398 - 1398", title: "شرکت مهندسی ساعی بنیان", subtitle: "طراحی اپلیکیشن خانه هوشمند Remonex", content: "طراحی اپلیکیشن با React Native جهت کنترل وسایل خانه توسط سخت افزار طراحی شده" },
    { id: 6, date: "1398 - اکنون", title: "www.ReactNativeDeveloper.ir", subtitle: "طراح، مدیر و مدرس وب سایت", content: "فرانت اند React js - بک اند پایتون Django - تولید دوره های آموزشی طراحی اپلیکیشن موبایل اندروید و آی او اس با React Native" },
    { id: 7, date: "1398 - اکنون", title: "www.ReactDeveloper.ir", subtitle: "طراح، مدیر و مدرس وب سایت", content: "فرانت اند React js - بک اند پایتون Django - تولید دوره های آموزشی فرانت اند با React js" },
    { id: 8, date: "1398 - اکنون", title: "www.flutterlearning.ir", subtitle: "طراح، مدیر و مدرس وب سایت", content: "فرانت اند React js - بک اند با لاراول - تولید دوره های آموزش بک اند نود جی اس و لاراول" },
    { id: 9, date: "1398 - اکنون", title: "www.FlutterLearning.ir", subtitle: "طراح، مدیر و مدرس وب سایت", content: "فرانت اند React js - بک اند با لاراول - تولید دوره های آموزش طراحی اپلیکیشن موبایل اندروید و آی او اس با زبان دارت و فریمورک فلاتر" },
    { id: 10, date: "1398 - اکنون", title: "www.AiLearning.ir", subtitle: "طراح، مدیر و مدرس وب سایت", content: "فرانت اند React js - بک اند پایتون Django - تولید دوره های آموزشی پردازش تصویر و هوش مصنوعی" },
    { id: 11, date: "1397 - 1397", title: "مجوعه آموزش فرادرس", subtitle: "مدرس دوره آموزشی", content: "تولید دوره آموزش ویدئویی React Native" },
    { id: 12, date: "1397 - 1397", title: "مجموعه آموزشی دانشجویار", subtitle: "مدرس دوره آموزشی", content: "مدرس دوره جامع آموزش ساخت اپلیکیشن اینستاگرام با React Native" },
    { id: 13, date: "1393 - 1394", title: "دانشگاه رازی کرمانشاه", subtitle: "مدرس دوره های برنامه نویسی", content: "مدرس دوره آموزش طراحی وب سایت و ساخت اپلیکیشن اندروید با جاوا" },
    { id: 14, date: "1397 - 1397", title: "www.farshidkarami.ir", subtitle: "وب سایت شخصی", content: "فرانت اند React js" },
    { id: 15, date: "1397 - 1397", title: "www.asbambo.ir", subtitle: "وب سایت شرکتی", content: "فرانت اند React js" },
    { id: 16, date: "1398 - اکنون", title: "TApanel", subtitle: "همکاری در طراحی وب سایت مدیریت آژانس های مسافرتی استفاده شده در علی بابا، اسنپ تریپ و پرسپولیس", content: "فرانت اند با React js" },
    { id: 17, date: "1397 - 1397", title: "ستاره ساز", subtitle: "همکاری در طراحی اپلیکیشن مسابقه تلویزیونی استعدادیابی فوتبال ستاره ساز", content: "اپلیکیشن با React Native - بک اند Node.js" },
    { id: 18, date: "1397 - 1397", title: "هیپوتریپ", subtitle: "همکاری در طراحی وب سایت و اپلیکیشن رزرو بلیط هیپو تریپ", content: "اپلیکیشن موبایل با React Native" },
    { id: 19, date: "1397 - 1397", title: "طراحی اپلیکیشن سرگرمی دنگ دنگ", subtitle: "منتشر شده در کافه بازار", content: "طراحی اپلیکیشن با React Native" },
    { id: -2, date: "", title: "", subtitle: "", content: "" },
  ]


  const downloadResume = () => {
    let a = document.createElement('a')
    a.href = "https://dl2.reactnativedeveloper.ir/cv_farshidkarami.pdf"
    a.download = "https://dl2.reactnativedeveloper.ir/cv_farshidkarami.pdf"
    a.click()

  }

  return (
    <Grid alignItems="flex-start" container className={classes.root} >
      <Helmet title={translate.name + " - " + translate.resume}
        description={
          translate.resumeDesc
        } />
      <Grid container style={{ marginTop: 30 }}>
        <Grid item xs={12} md={12} style={{ padding: 15 }}  >
          <Teacher
            image={ProfileImage}
            name="مهندس فرشید کرمی سرینی"
            teacherProps={[
              "مدیرعامل شرکت مهندسی بامبو، فاتحان آینده",
              "هم بنیان گذار موسسه آموزش آنلاین آسان یادبگیر",
              "دانشجوی ارشد مخابرات دانشگاه شهید بهشتی",
              "مدرس در مجمتمع فنی تهران",
              "طراح چندین وب سایت و اپلیکیشن معتبر"
            ]}
            teacherProps2={[
              "مسلط به طراحی فرانت اند وب سایت ها با  React js",
              "مسلط به کد نویسی سمت سرور / بک اند با زبان PHP و فریمورک Laravel",
              "مسلط به کد نویسی سمت سرور / بک اند با زبان جاوا اسکریپت / Node.js",
              "مسلط به طراحی اپلیکیشن موبایل Android  و IOS با زبان جاوااسکریپت / React Native",
              "مسلط به طراحی و پیاده سازی پایگاه های داده SQL و محبوب ترین آن ها  MySQL",
              "مسلط به طراحی و پیاده سازی پایگاه های داده NoSql و محبوب ترین آن ها MongoDB",
              "مسلط به زبان برنامه نویسی دارت و فریمورک فلاتر جهت طراحی اپلیکیشن موبایل اندروید و آی او ااس",
              "مسلط به مباحث هوش مصنوعی / پردازش تصویر / شبکه های عصبی / یادگیری عمیق با زبان پایتون"
            ]}
            mobile="09220479451"
            onClick={downloadResume}
          />
        </Grid>
      </Grid>

      <Grid className={classes.skillGrid} item container xs={12}>
        <Title title="مهارت ها" />
        <Grid container direction='row' >
          <Grid item xs={12} md={6}  >
            <Skill value={90} title="Node.js" />
            <Skill value={95} title="React js" />
            <Skill value={95} title="React Native" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Skill value={90} title="PHP & Laravel" />
            <Skill value={90} title="MySQL & MongoDB" />
            <Skill value={85} title="هوش مصنوعی" />

          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.skillGrid} item container xs={12}>
        <Title title="رزومه" />
        <Grid container direction='row' justify="flex-start" alignItems="center"  >
          <LocalLibraryIcon style={{ fontSize: 34 }} />
          <Typography className={classes.skillSecondTitle} variant="h4">
            مدارک تحصیلی
                    </Typography>
        </Grid>
        <Grid container style={{ marginTop: 15, marginBottom: 15 }} >
          <MyStepper steps={educationalSteps} />
        </Grid>
        <Grid container direction='row' justify="flex-start" alignItems="center"  >
          <BusinessCenterIcon style={{ fontSize: 34 }} />
          <Typography className={classes.skillSecondTitle} variant="h4">
            تجربه های کاری
                    </Typography>
        </Grid>
        <Grid container style={{ marginTop: 15, marginBottom: 15 }} >
          <MyStepper steps={workingSteps} />
        </Grid>
        <Typography style={{ marginTop: 15, width: "100%" }} variant="subtitle2">
          <span className={classes.titr} >توجه: </span>
                        تجربه های کاری ذکر شده در بالا مربوط به سال های اخیر می باشد و برای دیدن رزومه کامل می توانید رزومه مدرس را از لینک
                        زیر دریافت کنید.
                </Typography>
        <Button variant="text" color="primary" onClick={downloadResume}>
          دانلود رزومه کامل
                </Button>

      </Grid>

    </Grid>
  )
}
