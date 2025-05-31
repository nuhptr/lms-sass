type Props = {
    params: {
        id: string;
    };
};

const CompanionSessions = (props: Props) => {
    const { params } = props;

    return (
        <div>
            <h1>Companion Sessions for ID: {params.id}</h1>
        </div>
    );
};

export default CompanionSessions;
