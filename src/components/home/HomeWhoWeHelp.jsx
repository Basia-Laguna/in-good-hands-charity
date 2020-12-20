import { useState } from "react";

function HomeWhoWeHelp(props) {
  const whoWeHelp = {
    foundations: {
      buttonText: "Fundacjom",
      pages: [
        [
          {
            leftColumnHeader: "Fundacja Dbam o Zdrowie",
            leftColumnDes:
              "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            rightColumnText: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
          },
          {
            leftColumnHeader: "Fundacja Dla dzieci",
            leftColumnDes: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            rightColumnText: "ubrania, meble, zabawki",
          },
          {
            leftColumnHeader: "Fundacja Bez domu",
            leftColumnDes:
              "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            rightColumnText: "ubrania, jedzenie, ciepłe koce",
          },
        ],
        [
          {
            leftColumnHeader: "Fundacja Psie Miami",
            leftColumnDes:
              "Cel i misja: Pomoc psom czekającym na adopcję w domach tymczasowych",
            rightColumnText: "Ciepłe koce, jedzenie",
          },
          {
            leftColumnHeader: "Fundacja Praskie koty",
            leftColumnDes: "Cel i misja: Utrzymanie w zdrowiu kotów miejskich",
            rightColumnText: "Ciepłe koce, jedzenie, materiały budowlane",
          },
          {
            leftColumnHeader: "Fundacja Zdrowe zuchy",
            leftColumnDes:
              "Cel i misja: Pomoc dzieciom w złej sytuacji zdrowotnej ",
            rightColumnText: "Ksiąki, ubrania, zabawki",
          },
        ],
        [
          {
            leftColumnHeader: "Fundacja Mikołaje",
            leftColumnDes:
              "Cel i misja: Wsparcie świąteczne rodzin w trudnej sytuacji materialnej.",
            rightColumnText: "Jedzenie, ubrania, zabawki",
          },
          {
            leftColumnHeader: "Fundacja Jacka Cygana",
            leftColumnDes:
              "Cel i misja: Wspieranie osób utalentowanych muzycznie.",
            rightColumnText: "nuty, artykuły papiernicze, mikrofony",
          },
          {
            leftColumnHeader: "Fundacja Dress for Success",
            leftColumnDes:
              "Cel i misja: Pomoc osobom ubogim w autoprezentacji.",
            rightColumnText: "ubrania, kosmetyki, małe AGD",
          },
        ],
      ],
    },
    organisations: {
      buttonText: "Organizacjom pozarządowym",
      pages: [
        [
          {
            leftColumnHeader: "Stowarzyszenie Dla Ziemi",
            leftColumnDes: "Cel i misja: Edukacja ekologiczna.",
            rightColumnText: "sprzęt komputerowy, artykuły papiernicze",
          },
          {
            leftColumnHeader: "Fundacja ORCHidea",
            leftColumnDes:
              "Cel i misja: Pomoc osobom z niepełnosprawnością i ich rodzinom.",
            rightColumnText: "sprzęt medyczny, meble",
          },
          {
            leftColumnHeader: "Federacja na rzecz Kobiet",
            leftColumnDes:
              "Cel i misja: Edukacja i wsparcie w zakresie ochrony zdrowia kobiet.",
            rightColumnText: "sprzęt komputerowy",
          },
        ],
        [
          {
            leftColumnHeader: "Organizacja Psie Serce",
            leftColumnDes:
              "Cel i misja: Pomoc psom przebywającym w schroniskach.",
            rightColumnText: "Ciepłe koce, ręczniki, karma",
          },
          {
            leftColumnHeader: "Federacja Gejmer 2050",
            leftColumnDes: "Cel i misja: Edukacja młodziey w zakresie IT.",
            rightColumnText: "Sprzęt komputerowy, jedzenie, meble",
          },
          {
            leftColumnHeader: "Organizacja Ruchu",
            leftColumnDes:
              "Cel i misja: Działania na rzecz ocalenia kiosków RUCH ",
            rightColumnText: "Jedzenie, meble",
          },
        ],
      ],
    },
    localCollections: {
      buttonText: "Lokalnym zbiórkom",
      pages: [
        [
          {
            leftColumnHeader: "Funndacja Stylowy Bobas",
            leftColumnDes: "Cel i misja: Ubieranie dzieci samotnych matek.",
            rightColumnText: "ubrania, ubranka dziecięce, kocyki",
          },
          {
            leftColumnHeader: "Bóg, honor, choinka",
            leftColumnDes:
              "Cel i misja: Recykling choinek na drewno opałowe dla harcerzy",
            rightColumnText: "choinki naturalne, jemioły",
          },
          {
            leftColumnHeader: "Zakręcona",
            leftColumnDes:
              "Cel i misja: Przekazywanie pełnowartościowego plastiku do recyklingu",
            rightColumnText: "nakrętki",
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
      {initiatives.map((initiative) => (
        <button
          onClick={() => {
            setselectedInitiative(initiative);
            setPageNumber(0);
          }}
        >
          {whoWeHelp[initiative].buttonText}
        </button>
      ))}

      {/* <div>
        <button className="initiatives-button btn-border">Fundacjom</button>
        <button className="initiatives-button">
          Organizacjom pozarządowym
        </button>
        <button className="initiatives-button">Lokalnym zbiórkom</button>
      </div> */}
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
          {whoWeHelp[selectedInitiative].pages.length > 1 &&
            whoWeHelp[selectedInitiative].pages.map((page, index) => {
              return (
                <div onClick={() => setPageNumber(index)}>{index + 1}</div>
              );
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
