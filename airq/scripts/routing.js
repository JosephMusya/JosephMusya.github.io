const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    handleLocation();

};

const routes = {
    404: '/templates/404.html',
    '/': '/templates/dashboard.html',
    '/trade': '/templates/trade.html',
    '/view-map': '/templates/map.html'
}

const handleLocation = async() => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) =>
        data.text()
    );
    console.log(html)
    document.getElementById('parent').innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route

handleLocation();