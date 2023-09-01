import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'

const HomeLayoutContainer = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default HomeLayoutContainer
