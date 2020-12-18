import { useState } from "react";

function HomeWhoWeHelp(props) {
  const whoWeHelp = {
    foundations: {
      buttonText: "Fundacjom",
      pages: [
        [
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
        ],
        [
          {
            leftColumnHeader: "xxx2",
            leftColumnDes: "yyy2",
            rightColumnText: "zzz2",
          },
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
        ],
        [
          {
            leftColumnHeader: "xxx3",
            leftColumnDes: "yyy3",
            rightColumnText: "zzz3",
          },
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
        ],
      ],
    },
    organisations: {
      buttonText: "Organizacjom pozarządowym",
      pages: [
        [
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
        ],
        [
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
        ],
      ],
    },
    localCollections: {
      buttonText: "Lokalnym zbiórkom",
      pages: [
        [
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
          {
            leftColumnHeader: "xxx",
            leftColumnDes: "yyy",
            rightColumnText: "zzz",
          },
        ],
      ],
    },
  };
  const initiatives = Object.keys(whoWeHelp);
  const [selectedInitiative, setselectedInitiative] = useState(initiatives[0]);
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <div>
      {/* {initiatives.map((initiative) => (
        <button>{whoWeHelp[initiative].buttonText}</button>
      ))} */}
      <div>
        <button className="initiatives-button btn-border">Fundacjom</button>
        <button className="initiatives-button">Organizacjom</button>
        <button className="initiatives-button">Lokalnym</button>
      </div>
      <div>
        <table>
          {whoWeHelp[selectedInitiative].pages[pageNumber].map((tableEntry) => (
            <tr>
              <td>
                <div>{tableEntry.leftColumnHeader}</div>
                <div>{tableEntry.leftColumnDes}</div>
              </td>
              <td>
                <div>{tableEntry.rightColumnText}</div>
              </td>
            </tr>
          ))}
        </table>
        <div>
          {whoWeHelp[selectedInitiative].pages.map((page, index) => {
            return <div onClick={() => setPageNumber(index)}>{index + 1}</div>;
          })}
        </div>
        {/* DO STYLOWANIA */}
        {/* <table>
          <tr>
            <td>Fundacja XY</td>
            <td>Co bierze</td>
          </tr>
          <tr>
            <td>Fundacja XY</td>
            <td>Co bierze</td>
          </tr>
          <tr>
            <td>Fundacja XY</td>
            <td>Co bierze</td>
          </tr>
        </table> */}
      </div>
    </div>
  );
}

export default HomeWhoWeHelp;
