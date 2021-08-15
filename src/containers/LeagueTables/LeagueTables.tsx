import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useEffect, useState } from "react";
import { LeagueItem } from "types/leagueTable";
import useStyles from "./styles";

export default function LeagueTables() {
  const classes = useStyles();
  const [rows, setRows] = useState<Array<LeagueItem>>([]);
  useEffect(() => {
    setRows([
      {
        id: 1,
        createdDate: "2021-08-13T20:17:29.000+00:00",
        lastModifiedDate: "2021-08-13T20:17:29.000+00:00",
        name: "User1",
        fplName: "Team name 1",
        fplId: 40394,
        point: 0,
        position: 1,
        money: 0.0,
      },
      {
        id: 2,
        createdDate: "2021-08-13T20:20:50.000+00:00",
        lastModifiedDate: "2021-08-13T20:20:50.000+00:00",
        name: "User2",
        fplName: "Team name 2",
        fplId: 5508768,
        point: 0,
        position: 2,
        money: 0.0,
      },
      {
        id: 3,
        createdDate: "2021-08-13T20:20:50.000+00:00",
        lastModifiedDate: "2021-08-13T20:20:50.000+00:00",
        name: "User3",
        fplName: "Team name 3",
        fplId: 2681408,
        point: 0,
        position: 3,
        money: 0.0,
      },
      {
        id: 4,
        createdDate: "2021-08-13T20:20:50.000+00:00",
        lastModifiedDate: "2021-08-13T20:20:50.000+00:00",
        name: "User4",
        fplName: "Team name 4",
        fplId: 153965,
        point: 0,
        position: 4,
        money: 0.0,
      },
      {
        id: 5,
        createdDate: "2021-08-13T20:20:50.000+00:00",
        lastModifiedDate: "2021-08-13T20:20:50.000+00:00",
        name: "User5",
        fplName: "Team name 5",
        fplId: 126063,
        point: 0,
        position: 5,
        money: 0.0,
      },
      {
        id: 6,
        createdDate: "2021-08-13T20:20:50.000+00:00",
        lastModifiedDate: "2021-08-13T20:20:50.000+00:00",
        name: "User6",
        fplName: "Team name 6",
        fplId: 81998,
        point: 0,
        position: 6,
        money: 0.0,
      },
    ]);
  }, []);
  return (
    <div className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>{`Team & Manager`}</TableCell>
            <TableCell align="right">Point</TableCell>
            <TableCell align="right">Money</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.position}
              </TableCell>
              <TableCell>
                <p className={classes.team}>{row.fplName}</p>
                <p className={classes.manager}>{row.name}</p>
              </TableCell>
              <TableCell align="right">{row.point}</TableCell>
              <TableCell align="right">{row.money}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
