import { useParams } from "react-router-dom"

export const ParametersTestPage = () => {
	const params = useParams<"test">()
	return <p>Parameters test page: {params.test}</p>
}
