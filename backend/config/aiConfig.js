import OpenAI from 'openai';

const ImageGenerator=async(input)=>{
    input = JSON.stringify(input);
    console.log("Input:",input);

    const client = new OpenAI({
        baseURL: 'https://api.studio.nebius.com/v1/',
        apiKey: process.env.NEBIUS_API_KEY,
    });
    
    return await client.images.generate({
        "model": "black-forest-labs/flux-schnell",
        "response_format": "url",
        "extra_body": {
            "response_extension": "jpg",
            "width": 1024,
            "height": 1024,
            "num_inference_steps": 4,
            "negative_prompt": "",
            "seed": -1
        },
        "prompt": input
    })
        .then((response) => console.log(response));
}

export default ImageGenerator;