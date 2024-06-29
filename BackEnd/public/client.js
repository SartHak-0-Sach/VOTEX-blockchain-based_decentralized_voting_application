import { KeychainSDK } from './keychain-sdk';

const keychain = new KeychainSDK(window);

async function checkKeychain()
{
    const isKeychainInstalled = await keychain.isKeychainInstalled();
    if (!isKeychainInstalled)
    {
        alert('Hive Keychain is not installed.');
        return false;
    }
    return true;
}

document.getElementById('login-button').addEventListener('click', async () =>
{
    if (!await checkKeychain()) return;

    const username = prompt('Enter your Hive username');
    if (!username) return;

    const data = {
        username,
        message: '{"login":"123"}', // Example message, should be customized
        method: 'Posting',
        title: 'Login'
    };

    try
    {
        const loginResponse = await keychain.login(data);
        if (loginResponse.success)
        {
            authenticateUser(loginResponse.result, username);
        } else
        {
            alert('Authentication failed');
        }
    } catch (error)
    {
        console.log({ error });
        alert('Error during authentication');
    }
});

async function authenticateUser(signature, username)
{
    try
    {
        const response = await fetch('/api/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, signature })
        });
        const data = await response.json();
        if (data.success)
        {
            console.log('User authenticated');
        } else
        {
            console.log('Authentication failed');
        }
    } catch (error)
    {
        console.log({ error });
        alert('Error during authentication');
    }
}
