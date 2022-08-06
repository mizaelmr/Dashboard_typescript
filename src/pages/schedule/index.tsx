import React, { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

// import { Container } from './styles';

const Schedule: React.FC = () => {
  const [events, setEvents] = useState([
    { title: "event 1", date: "2022-08-10" },
    { title: "event 2", date: "2022-08-07" },
  ]);

  const handleDateClick = (arg: any) => {
    console.log(arg, "log");
    setEvents([
      ...events,
      { title: `event ${events.length + 1}`, date: arg.dateStr },
    ]);
  };

  console.log(events, "logs");

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      timeZone="america/sao_paulo"
      locale="pt-br"
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
