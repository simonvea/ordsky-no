## Introduction

Dette er backenden til ordsky.no. For frontenden se eget repo:

## API

### Telle ord

POST request sendes til /api/words. Objektet du sender må ha formen {text: "teksten her"}. 
Du får retunert et JSON objekt som ser slik ut: 
{ 
  "teksten": 1,
  "her": 1
}

### Telle ord på nettsider

POST requests sendes til /api/web som returnerer antall ord på nettsidene som du ønsker å telle ordene på.

POST requesten må sende en body med et objekt av formen: {urls: ["url1", "url2"], htmlElement: "body"}.

Urls er et krav og må være et array av lenker.

htmlElement er hvilket html element på siden som inneholder teksten du ønsker å telle ord fra. Dette er valgfritt. 
Default er body elementet på siden. Formen på strengen må være en selector.

APIet returnerer et JSON objekt med formen [{"ord": 6}], hvor tallet er antall ganger ordet er i teksten.

### Lage en ordsky

POST request sendes til /api/cloud. JSON objektet som sendes må se ut slik det du får når du teller ord (se ovenfor).

