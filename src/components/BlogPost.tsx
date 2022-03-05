// FIXME: Just grab the GraphQL node
interface BlogProps {
    value: {[key: string]: string }
}

export default function BlogPost(props: BlogProps): JSX.Element {
    return(
        <div>
            {props.value}
        </div>
    );
}
