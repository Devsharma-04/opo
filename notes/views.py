from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Note
from .serializers import NoteSerializer


@api_view(["GET", "POST"])
def note_list(request):

    if request.method == "GET":
        notes = Note.objects.all().order_by("-created_at")
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = NoteSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def note_detail(request, pk):

    try:
        note = Note.objects.get(pk=pk)
    except Note.DoesNotExist:
        return Response(
            {"error": "Note not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    # Get Single Note
    if request.method == "GET":
        serializer = NoteSerializer(note)
        return Response(serializer.data)

    # Update Note
    elif request.method == "PUT":
        serializer = NoteSerializer(note, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Delete Note
    elif request.method == "DELETE":
        note.delete()
        return Response(
            {"message": "Note deleted successfully"},
            status=status.HTTP_204_NO_CONTENT
        )