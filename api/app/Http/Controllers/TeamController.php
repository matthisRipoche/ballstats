<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    // Récupérer toutes les teams
    public function index()
    {
        return response()->json(Team::with('coach')->get());
    }

    // Récupérer un utilisateur par ID
    public function show($id)
    {
        $team = Team::find($id);
        if (!$team) {
            return response()->json(['message' => 'Team non trouvé'], 404);
        }
        return response()->json($team);
    }

    // Supprimer une team
    public function destroy($id)
    {
        $team = Team::find($id);
        if (!$team) {
            return response()->json(['message' => 'Team non trouvé'], 404);
        }
        $team->delete();
        return response()->json(['message' => 'Team supprimé avec succès']);
    }
}
