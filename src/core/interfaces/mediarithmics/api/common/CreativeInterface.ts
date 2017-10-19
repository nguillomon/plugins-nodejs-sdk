export interface CreativeResponse {
    status: string;
    data: Creative;
    count: number;
}

export interface Creative {
    id: string;
    organisation_id: string;
    name: string;
    technical_name: string;
    archived: boolean;
    editor_version_id: string;
    editor_version_value: string;
    editor_group_id: string;
    editor_artifact_id: string;
    editor_plugin_id: string;
    renderer_version_id: string;
    renderer_version_value: string;
    renderer_group_id: string;
    renderer_artifact_id: string;
    renderer_plugin_id: string;
    creation_date: number;
    subtype: string;
}