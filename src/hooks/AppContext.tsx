
// // krok 1 - tworzenie typu kontekstu

// type AppContextType = {
//   posts: Post[];
// };

// // krok 2 - tworzymy context na bazie typu
// // dopisujemy "export" poniewaz bedzie to potrzebne do uzycia useContext w komponentach

// export const AppContext = createContext<AppContextType>({} as AppContextType);

// // krok 3 - tworzenie naszego providera z propsami

// export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
//   const { posts} = useAppContext();

//   return (
//     <AppContext.Provider
//       value={{
//         posts,
      
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// // krok 4 - należy owrappować naszą aplikacje <App /> w pliku index.tsx
// // krok 5 - jakoś odczytać nasz stan z poziomu komponentu za pomoca useContext(naszContext)
