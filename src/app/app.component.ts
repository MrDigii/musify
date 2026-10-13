import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { invoke } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import { ZardButtonComponent } from "@/shared/components/button/button.component";

@Component({
    selector: "app-root",
    imports: [RouterOutlet, ZardButtonComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {
    greetingMessage = "";
    inputPlaceholder = "Enter your name";

    selectedFolder: string | null = null;
    files: string[] = [];

    greet(event: SubmitEvent, name: string): void {
        event.preventDefault();

        // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
        invoke<string>("greet", { name }).then((text) => {
            this.greetingMessage = text;
        });
    }

    async selectFolder(): Promise<void> {
        const folder = await open({ directory: true, multiple: false });
        if (!folder) return; // Dialog abgebrochen

        this.selectedFolder = folder;
        await this.listFiles(folder);
    }

    async listFiles(path: string): Promise<void> {
        try {
            this.files = await invoke<string[]>("list_files", { path });
        } catch (err) {
            console.error(err); // Fehlermeldung aus Rust
        }
    }
}
