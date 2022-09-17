import React, { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

// import { Container } from './styles';

const Schedule: React.FC = () => {
  // const [events, setEvents] = useState([
  //   { title: "event 1", date: "2022-08-10" },
  //   {
  //     title: "event 2",
  //     date: "2022-08-07",
  //     slotDuration: "14:00",
  //     color: "#913b35",
  //   },
  //   {
  //     title: "event 3",
  //     start: "2022-08-07T12:30:00",
  //     end: "2022-08-07T20:30:00",
  //     // url: "#",
  //     // color: "#913b35",
  //     // borderColor: "#ccc",
  //   },
  // ]);
  const [events, setEvents] = useState<any[]>([]);

  const handleDateClick = (arg: any) => {
    console.log(arg, "log");
    setEvents([
      ...events,
      { title: `event ${events.length + 1}`, date: arg.dateStr },
    ]);
  };

  useEffect(() => {
    fetch("http://localhost:3333/schedule", { mode: "no-cors" })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      timeZone="america/sao_paulo"
      locale="pt-br"
      droppable={true}
      editable={true}
      customButtons={{
        Novo: {
          text: "Novo",
          click: function () {
            alert("inserir novos dados");
          },
        },
      }}
      buttonText={{
        today: "Hoje",
        month: "Mês",
        week: "Semana",
        day: "Dia",
        list: "Lista",
        timeGrid: "Linha do tempo",
      }}
      //   allDayContent={false}
      allDayText="Hoje"
      headerToolbar={{
        left: "prev,next today Novo",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGrid",
      }}
      events={events}
      dateClick={handleDateClick}
    />
  );
};

export default Schedule;
