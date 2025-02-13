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

    public function show($id)
    {
        $team = Team::with('coach')->find($id);

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

    // Mettre à jour un utilisateur
    public function update(Request $request, $id)
    {
        $team = Team::find($id);
        if (!$team) {
            return response()->json(['message' => 'Utilisateur non trouvé'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
        ]);

        $team->update($validatedData);

        return response()->json(['message' => 'Utilisateur mis à jour avec succès', 'user' => $team]);
    }

    // Créer un nouvel utilisateur
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'coach' => 'required',
        ]);

        $team = Team::create([
            'name' => $request->name,
            'coach' => $request->coach,
        ]);

        return response()->json($team, 201);
    }
}
