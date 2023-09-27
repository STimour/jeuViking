import { Job } from "./Job";

function FormatJobInput(job: string): string {
    // Vérifier si la chaîne est vide ou nulle
    if (!job) {
        return job; // Renvoie la chaîne telle quelle si elle est vide ou nulle
    }
    const formated = job.charAt(0).toUpperCase() + job.slice(1).toLowerCase();
    return formated;
}

export function getJobFromString(job: string): Job | null {

    job = FormatJobInput(job);
    try {
        // Utilise eval pour obtenir la référence de la classe à partir du nom de la chaîne.
        const classReference = eval(job);

        // Vérifie que la classe existe.
        if (typeof classReference === 'function') {
        // Crée une nouvelle instance de la classe et la renvoie.
        return new classReference();
        } else {
        console.error(`La classe "${job}" n'existe pas.`);
        return new Job;
        }
    } catch (error) {
        console.error(`Une erreur s'est produite lors de la création de l'instance : ${error}`);
        return null;
    }
    }