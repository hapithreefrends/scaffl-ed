import HomePageLayoutWrapper from "./layout-appshell"
import NavbarProfileLoader from "./_components/navbar/navbar-profile-loader"


// composition pattern supports rendering of server components inside client components
export default function HomePageLayout({children}: {children: React.ReactNode}){
  return (
    <HomePageLayoutWrapper navbarProfileLoader={<NavbarProfileLoader/>}>
      {children}
    </HomePageLayoutWrapper>
  )
}