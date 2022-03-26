import options from "../options";

export async function getModuleData(module:string) {
    let data = await fetch(options.host+"api/module/"+module);
    return data.json();
}