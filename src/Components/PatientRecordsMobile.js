import { Divider, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // border: "2px solid gold",
    padding: "1rem",
  },
  titleHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  title: {
    fontSize: "1.25rem",
    color: "#2E3586",
  },
  bottomRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#4F4F4F",
    paddingBottom: "0.75rem",
  },
}));

const PatientRecordMobile = ({ record }) => {
  const {
    resource: { name = [], birthDate = "n/a", gender = "n/a" } = { name: [] },
    fullUrl,
  } = record || {};
  const { family = "", given = "" } = name[0] || {};
  const builtName = `${given} ${family}`;
  const classes = useStyles();
  const foundGenderString = gender === "n/a" ? false : true;
  console.log("found gender string", foundGenderString);
  console.log("gender", gender);
  const isFemale =
    foundGenderString && gender.toLowerCase() === "female" ? "F" : "n/a";
  const isMale =
    foundGenderString && gender.toLowerCase() === "male" ? "M" : "n/a";
  const normalizedGender = isFemale || isMale;

  return (
    <div className={classes.root}>
      <div className={classes.titleHeader}>
        <Typography variant="h5" className={classes.title}>
          {`${builtName} - ${normalizedGender}`}
        </Typography>
        {/* <Typography variant="subtitle2">{gender}</Typography> */}
      </div>
      <div className={classes.bottomRow}>
        <Typography variant="body2">{birthDate}</Typography>
        <a alt="showMoreLink" href={fullUrl}>
          Show More
        </a>
      </div>
      <Divider />
    </div>
  );
};

export default PatientRecordMobile;
