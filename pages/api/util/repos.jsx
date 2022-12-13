import fetch from 'isomorphic-unfetch';

export default async function Repos(req, res) {
    res.json(
        await (await fetch('https://api.github.com/users/shaydew/repos', {
            headers: {
                'Authorization': 'token {YOUR_TOKEN}'
            } // get token: https://github.com/settings/tokens
        })).json()
    );
};
