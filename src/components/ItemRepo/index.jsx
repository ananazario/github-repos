import { ItemContainer } from './style'

const ItemRepo = ({ repo, handleRemoveRepo }) => {
    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }

    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target='_blank'>Ver repositórios</a>
            <a href="#" rel='noreferrer' className='remove' onClick={handleRemove}>Remover</a>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo