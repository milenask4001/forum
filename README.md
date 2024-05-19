Zadanie  – Forum Internetowe

Utworz aplikacje webowa która będzie używana jako forum internetowe:
1. Zawiera podstrony:
-Homepage - strona powitalna, zawiera informacje o liczbe użytkowników na stronie (pobierane z API), liczbe aktualnie dostępnych postów oraz krótkie 
przywitanie z przekierowaniem na forum
-Lista postów (nasze forum)  - strona z wyswietlana liczba postów, pod kazdym postem jest możliwość dodania do ulubionych (dodaje do ulubionych w 
kontekscie), dania łapki w dół lub w góre (dodaje do polubionych, znielubionych w kontekscie) oraz mozliwosc udostepnienia (link generuje się jako link do 
podstrony pojedynczego postu po ID z naszej bazy. Lista powinna również posiadac wyszukiwarke (search term jest przechowywany w kontekscie)
-Pojedynczy post – tutaj mamy wiecej informacji na temat postu, mozliwosc usuniecia/dodania z ulubionych oraz możliwość usuniecia z naszej bazy oraz z 
kontekstu (jeżeli post jest z przedziału id 1-100) pobiera z bazy, jeżeli jest powyzej 100 to pobiera z kontekstu, posiada również przycisk do powrotu na 
strone z lista postów
-Nowy post, mozliwosc utworzenia nowego postu na bazie typu okreslonego w API (musimy napisac typ)
-Logowanie – logowanie powinno być zapytaniem do bazy w naszym API (zakladka login and token) - które zwraca nam token, musimy go dodac do 
naszego kontekstu - jeżeli w kontekscie token będzie pusty to oznacza, ze uzytkownik nie jest zalogowany – co za tym idzie nie ma mozliwosci edytowania, 
usuwania, dodawania itp..
-404 – dodanie strony 404 gdy aplikacja nie znajdzie rzadanej strony z przyciskiem do strony glownej
2. UWAGI:
-Kazda strona powinna być lekko wystylowana (bez wersji mobilnej, tylko desktop)
-Staramy się wydzielac komponenty jako atomic design (będzie to potrzebne do tworzenia testow)