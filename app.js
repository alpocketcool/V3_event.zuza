let events = JSON.parse(localStorage.getItem(events)  []);

function save(){
  localStorage.setItem(events, JSON.stringify(events));
  renderList();
}

function createEvent(){
  const e = {
    id Date.now(),
    title document.getElementById(title).value,
    date document.getElementById(date).value,
    place document.getElementById(place).value,
    desc document.getElementById(desc).value
  };

  if(!e.title) return;

  events.push(e);
  save();

  document.getElementById(title).value=;
  document.getElementById(date).value=;
  document.getElementById(place).value=;
  document.getElementById(desc).value=;
}

function renderList(){
  const list = document.getElementById(list);
  if(!list) return;

  list.innerHTML = ;

  events.forEach(ev={
    const div = document.createElement(div);
    div.className=event;
    div.innerHTML = `b${ev.title}bbrsmall${ev.date  }small`;

    div.onclick = ()={
      const link = `${location.origin}event.htmlid=${ev.id}`;

      document.getElementById(share).innerHTML = `
        bLink do eventubbr
        a href=${link} target=_blank${link}a
      `;
    };

    list.appendChild(div);
  });
}

function loadEventView(){
  const params = new URLSearchParams(location.search);
  const id = params.get(id);

  const ev = events.find(e = e.id == id);

  const el = document.getElementById(content);

  if(!ev){
    el.innerHTML = Event nie istnieje;
    return;
  }

  el.innerHTML = `
    h2${ev.title}h2
    small${ev.date  }smallbr
    small${ev.place  }small

    hr

    p${ev.desc  }p

    hr

    a class=btn
      href=httpswa.me48700000000text=Potwierdzam%20obecność%20na%20${encodeURIComponent(ev.title)}
      ✔ RSVP WhatsApp
    a

    p style=margin-top10px;font-size12px;color#9aa7b2;
      Event ID ${ev.id}
    p
  `;
}

window.onload = renderList;