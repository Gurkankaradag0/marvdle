import PrivacyPolicyContainer from '@/containers/PrivacyPolicy/PrivacyPolicyContainer'
import useLocaleServer from '@/hooks/useLocaleServer'

const PricacyPolicy = ({ searchParams }) => {
    return <PrivacyPolicyContainer searchParams={searchParams} />
}

export const generateMetadata = async () => {
    const locale = useLocaleServer()
    return {
        title: locale.privacyPolicy.title
    }
}

export default PricacyPolicy
